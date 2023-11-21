// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';
// import googleLogo from "../assets/googleLogo.png";

// const Login = () => {
//   const { login, loginwithGoogle } = useContext(AuthContext);
//   const [error, setError] = useState(); 

//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     login(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         alert("Login Successful!");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         const errorCode = error.code
//         setError(errorMessage); // Set the error message

//       });
//   };

//   const handleRegister = () => {
//     loginwithGoogle()
//       .then((result) => {
//         const user = result.user;
//         alert("Sign up successful!");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         setError(errorMessage); // Set the error message
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
//         </div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <div>
//               <h1 className="text-2xl font-semibold">Login </h1>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <form
//                 onSubmit={handleLogin}
//                 className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
//               >
//                 <div className="relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="text"
//                     placeholder="Email address"
//                     className="w-full h-10 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:shadow-sm"
//                   />
//                 </div>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     placeholder="Password"
//                     className="w-full h-10 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:shadow-sm"
//                   />
//                 </div>
//                 {error ? <p className='text-red-600 text-base'>Email or Password is invalid :</p> : ""}
//                 <p>
//                   Don't have an account?{' '}
//                   <Link to="/sign-up" className="text-blue-600 underline">
//                     Sign Up
//                   </Link>
//                 </p>
//                 <div className="relative">
//                   <button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
//                 </div>
//               </form>
//             </div>

//             <hr />
//             <div className="flex w-full items-center flex-col mt-5 gap-3">
//               <button onClick={handleRegister} className="block">
//                 <img src={googleLogo} alt="google" className="w-12 h-12 inline-block" />
//                 &emsp; Login with Google
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Login () {
    const navigate = useNavigate();

    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    
    axios.defaults.withCredentials =true;
    const handleSubmit =(e) =>{
        e.preventDefault()
        window.localStorage.setItem("isLoggedIn",true)
        axios.post('http://localhost:4002/login', {email,password})
        .then(res => {
            console.log(res.data);
            if (res.data.Status === "Success") {
                if (res.data.role === "admin") {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/user/dashboard');
                }
            }
        })
        .catch(err => console.log(err));
        

    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded w-200">
        <h2>Login</h2>
        <div>
        <form onSubmit={handleSubmit} >
            

            <div className="mb-3" >
            <label htmlFor='email'>
                <strong>
                    Email
                </strong>
            </label>
            <input 
            type="text" 
            placeholder='Enter Email'
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
            />

            </div>

            <div  className="mb-3">
            <label htmlFor='email'>
                <strong>
                    Password
                </strong>
            </label>
            <input 
   type="password" 
   placeholder='Enter Password'
   autoComplete="off"
   name="password"
   className="form-control rounded-0"
   onChange={(e) => setPassword(e.target.value)}
/>


            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
                Login
            </button>

        </form>
        <p>Already Have an account</p>
        <Link to="/Register"  className="btn btn-default  border w-100 bg-light  rounded-0 ">
                Sign Up
            </Link>

        </div>
        </div>  
      
    </div>
  )
}

export default Login
