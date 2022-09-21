import React , {useState} from 'react'
import axios from "axios";
import "./register.css";
import {useNavigate} from "react-router-dom";


 const Register = () => {
  
  const navigate = useNavigate();

   const [Name, setName]= useState("");
   const [Email, setEmail]= useState("");
   const [Password, setPassword]= useState("");
   const [ConfirmPassword, setConfirmPassword]= useState("");
   
 

   const handleClick = ()=>{
    const user = { Name,Email,Password,ConfirmPassword}

    if(Name && Email && Password && (Password === ConfirmPassword))
      {
        axios.post("http://localhost:2000/register",user)
        .then(res=>{
          alert(res.data.message)
          navigate("/login");
        })
        .catch(err=>console.log(err.message))
   }
   else 
      {
           alert("Invalid credentials");
      }
   }
     
  return (
  <div className="register">
  <h1>Register</h1>
  <input type="text" name ="name" value={Name} placeholder="Enter Your Name"  onChange={(e)=>{setName(e.target.value)}}/>
  <input type="email" name ="email" value={Email} placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
  <input type="password" name ="password" value={Password} placeholder="Create New Password" onChange={(e)=>{setPassword(e.target.value)}}/>
  <input type="password" name ="confirmPassword" value={ConfirmPassword} placeholder="Confirm Your Password" onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
  <button onClick={handleClick}>Register</button> 
  <p id="p">Already have an account ?<a href="/login">Log In</a></p>
  </div>
  
  )

}

export default Register;