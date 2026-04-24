import { createBrowserRouter } from "react-router";
import Login from "../pages/login";
import MainLayout from "../pages/layouts/mainLayout";

export default createBrowserRouter([
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
