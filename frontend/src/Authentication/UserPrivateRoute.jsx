import { Outlet, Navigate } from 'react-router-dom';
import UDashboardLayout from '../UDashboard/UDashboardLayout';


const UserPrivateRoute = () => 
{
    
    var flag =localStorage.getItem("isLoggedIn")
    console.log(flag)
    return flag  ? (
        <UDashboardLayout/>
    ) : (

        <Navigate to="/login" />
    );
};

export default UserPrivateRoute