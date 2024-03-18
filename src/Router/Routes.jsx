import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Doctors from "../Pages/Doctor/Doctors";
import Booking from "../Pages/Doctor/Booking";
import BookingSubmit from "../Pages/Doctor/BookingSubmit";
import PrivatePage from "../PrivatePage/PrivatePage";
import Labtest from "../Pages/LabTest/Labtest";
import LabTestBook from "../Pages/LabTest/LabTestBook";
import NotFound404 from "../Pages/SharedPages/NotFound404";
import CantactUs from "../Pages/CantactUs";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () =>fetch("/healthcare.json")
            
        },
        {
            path:"/about",
            element: <About></About>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/doctors",
            element: <Doctors></Doctors>,
            loader: () => fetch('/healthcare.json')
        },
        {
          path:"/booking/:id",
          element: <PrivatePage><Booking></Booking></PrivatePage>,
          loader: () => fetch("/healthcare.json")
        },
        {
          path:"/bookingSubmit",
          element: <BookingSubmit></BookingSubmit>
        },
        {
          path: '/labtest',
          element: <Labtest></Labtest>,
          loader: () => fetch("/pathologyTest.json")
        },
        {
          path: '/labtestbook/:id',
          element: <PrivatePage><LabTestBook></LabTestBook></PrivatePage>,
          loader: () => fetch("/pathologyTest.json")
        },
        {
          path:'/cantact',
          element:<CantactUs></CantactUs>

        },
        {
          path: "/*",
          element: <NotFound404></NotFound404>
        }
        
      ]
    },
  ]);


export default router;