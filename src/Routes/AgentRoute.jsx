import useRole from '../Hooks/useRole';
import { Navigate } from 'react-router-dom';

const AgentRoute = ({children}) => {
    const [role, isLoading] = useRole();
    
    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    if(role === 'Agent') return children
    return <Navigate to="/dashboard"></Navigate>

};

export default AgentRoute;