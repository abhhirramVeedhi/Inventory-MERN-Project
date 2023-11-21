import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutImage from '../assets/Logout.jpg';

function LogOut() {
    const navigate = useNavigate();
    const [isLogoutHovered, setIsLogoutHovered] = useState(false);
    const [isDashboardHovered, setIsDashboardHovered] = useState(false);

    const Logout = () => {
        window.localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    

    const containerStyle = {
        backgroundImage: `url(${LogoutImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        color: 'white',
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    };

    const buttonStyle = {
        borderRadius: '5px',
        padding: '10px 20px',
        fontSize: '20px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.5s ease, color 0.5s ease',
        margin: '5px',
    };

    const logoutButtonStyle = {
        ...buttonStyle,
        backgroundColor: isLogoutHovered ? '#de0e3a' : '#89c5fd',
        color: isLogoutHovered ? 'white' : 'black',
    };

    
    return (
        <div style={containerStyle}>
            <h2>Press the button to log out</h2>
            <button 
                onClick={Logout}
                style={logoutButtonStyle}
                onMouseEnter={() => setIsLogoutHovered(true)}
                onMouseLeave={() => setIsLogoutHovered(false)}
            >
                Logout
            </button>

            <br/>

            
        </div>
    );
}

export default LogOut;




// import { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import LogoutImage from '../assets/Logout.jpg';

// function LogOut() {
//     const [isLogoutHovered, setIsLogoutHovered] = useState(false);

//     const Logout = () => {
//         window.localStorage.removeItem("isLoggedIn");
//         // You can perform any other logout actions here
//     };

//     const containerStyle = {
//         backgroundImage: `url(${LogoutImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '20px',
//         color: 'white',
//         textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
//     };

//     const buttonStyle = {
//         borderRadius: '5px',
//         padding: '10px 20px',
//         fontSize: '20px',
//         border: 'none',
//         outline: 'none',
//         cursor: 'pointer',
//         transition: 'background-color 0.5s ease, color 0.5s ease',
//         margin: '5px',
//     };

//     const logoutButtonStyle = {
//         ...buttonStyle,
//         backgroundColor: isLogoutHovered ? '#de0e3a' : '#89c5fd',
//         color: isLogoutHovered ? 'white' : 'black',
//     };

//     return (
//         <div style={containerStyle}>
//             <h2>Press the button to log out</h2>
//             <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
//                 <button 
//                     onClick={Logout}
//                     style={logoutButtonStyle}
//                     onMouseEnter={() => setIsLogoutHovered(true)}
//                     onMouseLeave={() => setIsLogoutHovered(false)}
//                 >
//                     Logout
//                 </button>
//             </Link>
//         </div>
//     );
// }

// export default LogOut;
