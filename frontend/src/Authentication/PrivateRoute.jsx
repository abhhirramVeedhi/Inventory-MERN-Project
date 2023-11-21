import { Outlet, Navigate } from 'react-router-dom';
import DashboardLayout from '../Dashboard/DashboardLayout';


const PrivateRoute = () => 
{
    // Assume auth is obtained from a successful verification
    var flag =localStorage.getItem("isLoggedIn")
    console.log(flag)
    return flag  ? (
        <DashboardLayout/>
    ) : (

        <Navigate to="/login" />
    );
};

export default PrivateRoute;




