import { createBrowserRouter } from "react-router-dom";
import CollegeDetails from "../components/CollegeDetails";
import Root from "../layout/Root";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../pages/AdmissionForm/AdmissionForm";
import Colleges from "../pages/Colleges/Colleges";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyColleges from "../pages/MyColleges/MyColleges";
import Registration from "../pages/Ragistraiton/Registration";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/admissionForm/:id",
        element: <AdmissionForm />,
      },
      {
        path: "/myColleges",
        element: (
          <PrivateRoute>
            <MyColleges />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
