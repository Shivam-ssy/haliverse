import React, { useState } from "react";
import InputBox from "../utils/InputBox";
import config from "../config/config.js";
import axios from "axios"
import {toast, ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { login } from "../store/feature/Auth.js";
import { useDispatch } from "react-redux";
function Login() {
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const handleChange=(e)=>{
      e.preventDefault()
      const { name, value } = e.target;      
      setFormData({
        ...formData,
        [name]: value,
      })
  }
  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log(formData);
    // try{
    //   const loginData=await axios.post(`${config.backendUrl}/${config.apiEndPoint}/users/login`,formData)
    //   console.log("login data",loginData);
    //   if(loginData.status===200)
    //   Navigate("/dashboard")
    // }catch(error){
    //   toast.error("Invalid User Credenatial")
    //   // console.log("error at login",error.toJSON())
    // }
    dispatch(login(formData)).then((action) => {
      console.log(action)
      if(action.payload)
        Navigate("/dashboard")
      else{
        toast.error("Please Enter a valid Email and Password")
      }
    })
  }
  return (
    <main className="h-screen flex relative p-3 justify-center items-center font-serif w-full bg-[#FFD100]">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="bg-[#202020] py-5 px-10 rounded-3xl">
        <h3 className="text-xl text-white text-center">Welcome to </h3>
        <div className="flex flex-col items-center">
          <span className="font-bold text-2xl md:text-3xl font-serif text-green-400">
            Springdale{" "}
          </span>
          <span className="text-white font-bold">Public School</span>
        </div>
        <InputBox value={formData.email} onChange={handleChange} className="mt-5" required InputStyle="w-80 p-3" placeholder="Enter Your Email" type="email" name="email"/>
        <InputBox value={formData.password} onChange={handleChange} className="mt-5 mb-2" required InputStyle="w-80 p-3" placeholder="Enter Your Password" type="password" name="password"/>
        <span className="text-red-500">Don't have Email and Password Please Contact <br /> to Admin</span>
        <InputBox onClick={handleSubmit} className="mt-5 text-center font-bold " required InputStyle="w-fit cursor-pointer transition duration-300 ease-out hover:bg-white py-2 px-5  bg-[rgba(230,187,0,1)] "  type="submit" value="Login"/>
      </div>
    </main>
  );
}

export default Login;
