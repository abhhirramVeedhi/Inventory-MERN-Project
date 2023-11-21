// import React, { useContext } from 'react'
// import { AuthContext } from '../context/AuthProvider'
// import { useLocation, useNavigate } from 'react-router-dom';

// const Logout = () => {
//     const{logOut}= useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathname || "/";
//     const handleLogout= ()=>{
//         logOut().then(()=>{
//             alert("Sign-out Successfully");
//             navigate(from,{replace:true});
//         }).catch((error)=>{
            
//         });
    
//     }
//   return (
//     <div className='h-screen bg-teal-100 flex items-center justify-center'>
//       <button className='bg-red-700 px-4 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
//     </div>
//   )
// }

// export default Logout


import { useNavigate } from "react-router-dom"

function LogOut ()  {
    const navigate = useNavigate();
    const LogOut = () =>{
        window.localStorage.removeItem("isLoggedIn")
        navigate('/')
    }
  return (
    <div>
      <button onClick={LogOut}>
        Logout
        
        </button>
    </div>
  )
}

export default LogOut


