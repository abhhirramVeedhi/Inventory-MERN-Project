// import React, { useContext, useState} from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthProvider';
// import googleLogo from "../assets/googleLogo.png"


// const Signup = () => {
//   const {createUser , loginwithGoogle } = useContext (AuthContext);
//   const {error , setError} = useState("error");

//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/"

//   const handleSingUp=(event)=>{
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password  = form.password.value;

//     createUser(email,password).then((userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       alert("Sign Up successfull!")
//       navigate(from, {replace: true})
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       setError(errorMessage)
//       // ..
//     });
//   }

//    const handleRegister= ()=>{
//     loginwithGoogle().then((result)=>{
//       const user = result.user;
//       alert("sign up successfull!")
//       navigate(from,{replace:true})
//     }).catch((error)=>{
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         setError(errorMessage)
//         //..
//       });
//    }
//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
//         </div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <div>
//               <h1 className="text-2xl font-semibold">Sign Up </h1>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <form onSubmit={handleSingUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
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
//                 <p>
//                   Already have an account?{' '}
//                   <Link to="/login" className="text-blue-600 underline">
//                     Login
//                   </Link>
//                 </p>
//                 <div className="relative">
//                   <button className="bg-blue-500 text-white rounded-md px-2 py-1">Sign Up</button>
//                 </div>
//               </form> 
//             </div>

//             <hr />
//             <div className='flex w-full items-center flex-col mt-5 gap-3'>
//               <button onClick={handleRegister} className='block'><img src={googleLogo} about="google" className='w-12 h-12 inline-block'/>&emsp; Login with Google</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function SignUp ()  {

    const navigate = useNavigate();
    
    const [name,setName] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    // const navigate = useNavigate();
    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:4002/register',{name,email,password})
        .then(res =>{
            navigate('/login')    
        }).catch(err=> console.log(err))
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded w-200">
        <h2>Register</h2>
        <div>
        <form onSubmit={handleSubmit} >
            <div className="mb-3" >
            <label htmlFor='email'>
                <strong>
                    Name
                </strong>
            </label>
            <input 
            type="text" 
            placeholder='Enter Name'
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setName(e.target.value)}
            />

            </div>

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
                Register
            </button>

        </form>
        <p>Already Have an account</p>
        <Link to="/login"  className="btn btn-default  border w-100 bg-light  rounded-0 ">
                Login
            </Link>

        </div>
        </div>  
      
    </div>
  )
}

export default SignUp



