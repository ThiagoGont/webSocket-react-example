import { createBrowserRouter } from "react-router";
import MainLayout from "../pages/layouts/mainLayout";
import EnterRoom from "../pages/enterRoom";

export default createBrowserRouter([
  {
    path: "/room",
    element: <MainLayout />,
    children: [
      {
        path: "enter",
        element: <EnterRoom />,
      },
    ],
  },
]);
