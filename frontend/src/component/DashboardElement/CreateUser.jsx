import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import InputBox from '../../utils/InputBox'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { registerStudent, registerTeacher } from '../../store/feature/User';
import { useState } from 'react';
function CreateUser() {
  const [isStudent,setIsStudent]=useState(true)
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    e.preventDefault()
    const { name, value } = e.target;      
    setFormData({
      ...formData,
      [name]: value,
    })
}
  const dispatch=useDispatch()
  const handleSubmit= async (e)=>{
    console.log(isStudent);
    
    e.preventDefault()
    console.log(formData);
    if(isStudent){

      await dispatch(registerStudent(formData)).then((action) => {
        console.log(action)
        if(action.type && action.type==="user/registerStudent/fulfilled")
         toast.success("user created successfully")
        else if(action.payload.response.status===400)
          toast.error("Please enter  name email and password")
        else if(action.payload.response.status===409)
            toast.error("Email Aready exist")
        else{
            toast.error(" Something went wrong while creating")
          }
  
      })
    }
    else{
      await dispatch(registerTeacher(formData)).then((action) => {
    
        if(action.type==="user/registerTeacher/fulfilled")
         toast.success("user created successfully")

        else if(action.payload.response.status===400)
            toast.error("Please enter  name email and password")
        else if(action.payload.response.status===409)
            toast.error("Email Aready exist")
        else
          toast.error(" Something went wrong while creating")
        
      })
    }
  }
  return (
    <div>
       <main className="h-screen flex relative p-3 justify-center items-center font-serif w-full">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="bg-[#202020] py-5 px-10 rounded-3xl">
        <h3 className="text-xl text-white text-center">Create a Student</h3>
        <InputBox value={formData.name} onChange={handleChange} className="mt-5" required InputStyle="w-80 p-3" placeholder="Enter Name" type="text" name="name"/>
        <InputBox value={formData.email} onChange={handleChange} className="mt-5" required InputStyle="w-80 p-3" placeholder="Enter Email" type="email" name="email"/>
        <InputBox value={formData.password} onChange={handleChange} className="mt-5 mb-2" required InputStyle="w-80 p-3" placeholder="Enter Password" type="password" name="password"/>
        <InputBox className='flex items-center text-white gap-5 flex-row-reverse justify-end' checked={isStudent} type='checkbox' onChange={(e)=>setIsStudent(e.target.checked)} label={"Student"}/>
        <InputBox onClick={handleSubmit} className="mt-5 text-center font-bold " required InputStyle="w-fit cursor-pointer transition duration-300 ease-out hover:bg-white py-2 px-5  bg-[rgba(230,187,0,1)] "  type="submit" value="Submit"/>
      </div>
    </main>
    </div>
  )
}

export default CreateUser
