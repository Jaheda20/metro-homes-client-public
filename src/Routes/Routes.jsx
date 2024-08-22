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
import Wishlist from "../Pages/Dashboard/Users/Wishlist";
import MakeOffer from "../Components/Dashboard/User/MakeOffer";
import PropertyBought from "../Pages/Dashboard/Users/PropertyBought";
import RequestedProperties from "../Pages/Dashboard/Agent/RequestedProperties";
import Payment from "../Components/Dashboard/User/Payment";
import MySoldProperties from "../Pages/Dashboard/Agent/MySoldProperties";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
import AdvertiseProperties from "../Pages/Dashboard/Admin/AdvertiseProperties";

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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                index: true,
                element: <PrivateRoute><Profile></Profile></PrivateRoute>

            },

            {
                path: "addProperty",
                element: <PrivateRoute>
                    <AgentRoute>
                        <AddProperty></AddProperty>
                    </AgentRoute>
                </PrivateRoute>

            },
            {
                path: "myAddedProperties",
                element: <PrivateRoute>
                    <AgentRoute>
                        <MyAddedProperties></MyAddedProperties>
                    </AgentRoute>
                </PrivateRoute>

            },
            {
                path: "property/update/:id",
                element: <PrivateRoute>
                    <AgentRoute>
                        <UpdateProperty></UpdateProperty>
                    </AgentRoute>
                </PrivateRoute>

            },
            {
                path: "manageUsers",
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageUsers></ManageUsers>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: "manageReviews",
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageReviews></ManageReviews>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: "manageProperties",
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageProperties></ManageProperties>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: "advertiseProperties",
                element: <PrivateRoute>
                    <AdminRoute>
                        <AdvertiseProperties></AdvertiseProperties>
                    </AdminRoute>
                </PrivateRoute>
            },

            {
                path: "myReviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "myWishlist",
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>


            },
            {
                path: "makeOffer/:id",
                element: <PrivateRoute><MakeOffer></MakeOffer></PrivateRoute>
            },
            {
                path: "propertyBought",
                element: <PrivateRoute><PropertyBought></PropertyBought></PrivateRoute>
            },
            {
                path: "requestedProperties",
                element: <PrivateRoute>
                    <AgentRoute>
                        <RequestedProperties></RequestedProperties>
                    </AgentRoute>
                </PrivateRoute>
            },
            {
                path: "payment",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: "mySoldProperties",
                element: <PrivateRoute>
                    <AgentRoute>
                        <MySoldProperties></MySoldProperties>
                    </AgentRoute>
                </PrivateRoute>
            }
        ]
    }
]);

export default router;