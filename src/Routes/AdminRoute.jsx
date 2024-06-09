import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";


const AdminRoute = ({children}) => {
    const [role, isLoading] = useRole();
    
    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    if(role === 'Admin') return children
    return <Navigate to="/dashboard"></Navigate>

    
};

export default AdminRoute;