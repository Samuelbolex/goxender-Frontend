import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const LoginPage = lazy(() => import("@pages/login"));
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
