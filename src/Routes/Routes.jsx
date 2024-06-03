import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CustomerService from "../Components/Contact/CustomerService";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProperty from "../Components/Dashboard/Agent/AddProperty";
import MyAddedProperties from "../Components/Dashboard/Agent/MyAddedProperties";
import AllProperties from "../Pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../Components/PropertyDetails/PropertyDetails";
import UpdateProperty from "../Components/Dashboard/Agent/UpdateProperty";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/customerService",
                element: <CustomerService></CustomerService>
            },
            {
                path: "/allProperties",
                element: <PrivateRoute><AllProperties></AllProperties> </PrivateRoute>
            },
            {
                path: "/property/:id",
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            
            {
                path: "addProperty",
                element: <AddProperty></AddProperty>
            },
            {
                path: "myAddedProperties",
                element: <MyAddedProperties></MyAddedProperties>
            },
            {
                path: "update",
                element: <UpdateProperty></UpdateProperty>
            }
        ]
    }
]);

export default router;