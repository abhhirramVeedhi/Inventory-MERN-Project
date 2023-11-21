import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import Loginimage from '../assets/Login3.jpg'
import { FaBlog } from 'react-icons/fa6'

function Login () {
    const navigate = useNavigate();

    const [email,setEmail] =useState();
    const [password,setPassword] =useState();
    
    axios.defaults.withCredentials =true;
    const handleSubmit =(e) =>{
        e.preventDefault()
        window.localStorage.setItem("isLoggedIn",true)
        // window.localStorage.setItem("role",res.data.role)
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
    const divStyle = {
        backgroundImage: `url(${Loginimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
  return (
    <div style={divStyle}>
        <div className="d-flex justify-content-center align-items-center bg-secondary ">
      <div className="bg-orange-50 p-10 rounded w-200 shadow-2xl ">
        <h2 className='text-center'>Login</h2>
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
        <br/>
        <p>Already Have an account</p>
        <Link to="/Register"  className="btn btn-default  border w-100 bg-light  rounded-0 ">
                Sign Up
            </Link>
        
        <br/>
        <br/>
        <p>Go back to Home</p>
        <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2' id='main'><FaBlog className='inline-block' />InventoryIQ</Link>
        </div>
        </div>  
        </div>
        </div>  
      
  
  )
}

export default Login