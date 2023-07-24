import { createBrowserRouter } from "react-router-dom";
import CollegeDetails from "../components/CollegeDetails";
import Root from "../layout/Root";
import Colleges from "../pages/Colleges/Colleges";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Ragistraiton/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/colleges/:id",
        element: <CollegeDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
