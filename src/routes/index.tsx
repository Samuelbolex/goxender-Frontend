import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const LoginPage = lazy(() => import("@pages/login"));
const RegistrationPage = lazy(() => import("@pages/registration"));
const PageNotFoundPage = lazy(() => import("@pages/page-not-found"));

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "registration",
          element: <RegistrationPage />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
