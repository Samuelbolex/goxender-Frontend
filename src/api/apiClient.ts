import type { ApiResponse, LoginPayload } from "@declared-types/index";
import { resetIsLogin } from "@hooks/redux/slices/loginSlice";
import { logout, saveToken } from "@hooks/redux/slices/tokenSlice";
import { store } from "@hooks/redux/store";
import axios from "axios";
import toast from "react-hot-toast";

export const apiErrorHandler = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error.status === 403) {
      toast.error("Insufficient permissions.");
    } else {
      if (error.response) {
        // Server responded with a status code outside 2xx
        console.error("Response error:", error.response);
        toast.error(error.response.data.message);
        return error.response;
      } else if (error.request) {
        // Request was made but no response received
        let message = "No response from server. Please check your network.";
        console.error("Request error:", error.request);
        return {
          success: false,
          statusCode: error.status,
          message: message,
          data: null,
        };
      } else {
        // Something else caused an error

        console.error("Unknown Axios error:", error.message);
        return {
          success: false,
          statusCode: error.status,
          message: error.message,
          data: null,
        };
      }
    }
  } else {
    // Non-Axios error
    console.error("Non-Axios error:", error);
    return {
      success: false,
      statusCode: 400,
      message: "somethig went wrong.",
      data: null,
    };
  }
};
// Replace with your actual Render API URL
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const token = store.getState().token.token;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    // Get token (from localStorage, AsyncStorage, Redux, etc.)
    const token = store.getState().token.token;
    // For React Native: use AsyncStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle error
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log("Interceptor", error);

    if (
      error.response?.status === 401 &&
      error.response.data.code === "TOKEN_EXPIRED" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        console.log("Refresh", store.getState().token.refreshToken);
        const { data } = await axios.post(
          `${API_BASE_URL}/auth/refresh-token`,
          {
            refreshToken: store.getState().token.refreshToken,
          }
        );

        console.log("MY DATA", data);

        localStorage.setItem("token", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);

        originalRequest.headers.Authorization = `Bearer ${data.data.accessToken}`;
        store.dispatch(
          saveToken({
            token: data.data.accessToken,
            refreshToken: data.data.refreshToken,
          })
        );
        console.log("Refresh token", store.getState().token.refreshToken);
        return axios(originalRequest);
      } catch (refreshError) {
        // Redirect to login if refresh fails
        console.log("My error", refreshError);
        window.location.href = "/";
        store.dispatch(logout());

        return Promise.reject(refreshError);
      }
    } else {
      return apiErrorHandler(error);
    }
  }
);

export const auth = async (
  payload: LoginPayload
): Promise<ApiResponse | any> => {
  try {
    const response = await apiClient.post("/auth/login", payload);

    return response.data;
  } catch (error) {
    return await apiErrorHandler(error);
  }
};
export const authlogout = async () => {
  try {
    store.dispatch(logout());
    store.dispatch(resetIsLogin());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export default apiClient;
