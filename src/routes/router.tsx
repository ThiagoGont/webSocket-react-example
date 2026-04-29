import { createBrowserRouter } from "react-router";
import MainLayout from "../pages/layouts/mainLayout";
import EnterRoom from "../pages/enterRoom";
import enterRoomAction from "./actions/enterRoom";
import path from "path";

export default createBrowserRouter([
  {
    path: "*",
    element: <MainLayout />,
    children: [
      {
        path: "/room",
        children: [
          {
            action: enterRoomAction,
            path: "/enter",
            element: <EnterRoom />,
          },
        ],
      },
    ],
  },
]);
