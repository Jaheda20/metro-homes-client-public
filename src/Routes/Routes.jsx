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
import AddProperty from "../Pages/Dashboard/Agent/AddProperty";
import MyAddedProperties from "../Pages/Dashboard/Agent/MyAddedProperties";
import AllProperties from "../Pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../Components/PropertyDetails/PropertyDetails";
import UpdateProperty from "../Pages/Dashboard/Agent/UpdateProperty";
import Profile from "../Pages/Dashboard/Common/Profile";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import ManageProperties from "../Pages/Dashboard/Admin/ManageProperties";
import MyReviews from "../Pages/Dashboard/Users/MyReviews";
import ManageReviews from "../Pages/Dashboard/Admin/ManageReviews";

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
                path: 'profile',
                element: <Profile></Profile>
            },
            
            {
                path: "addProperty",
                element: <AddProperty></AddProperty>
            },
            {
                path: "myAddedProperties",
                element: <MyAddedProperties></MyAddedProperties>
            },
            {
                path: "property/update/:id",
                element: <UpdateProperty></UpdateProperty>
            },
            {
                path: "manageUsers",
                element: <PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
            },
            {
                path: "manageReviews",
                element: <PrivateRoute>
                    <ManageReviews></ManageReviews>
                </PrivateRoute>
            },
            {
                path: "manageProperties",
                element: <PrivateRoute>
                    <ManageProperties></ManageProperties>
                </PrivateRoute>
            },
            {
                path: "myReviews",
                element: <MyReviews></MyReviews>
            }
        ]
    }
]);

export default router;