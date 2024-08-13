import React, { useState } from 'react'
import InputBox from '../../utils/InputBox';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"
import axios from "axios"
import config from "../../config/config.js"
import { useSelector } from 'react-redux';
function CreateClassroom() {
  const [assignTeacher,setAssignTeacher]=useState("")
  const data=useSelector((state)=>state.user)
  const teachers = data.teachers;

  const [formData,setFormData]=useState({
      name:"",
      startTime:null,
      endTime:null,
  })
  const [days,setDays]=useState({
    Sunday:false,
    Monday:false,
    Tuesday:false,
    Wednesday:false,
    Thursday:false,
    Friday:false,
    Saturday:false,
  })
  const handleChange=(e)=>{
    e.preventDefault()
    const { name, value } = e.target;      
    setFormData({
      ...formData,
      [name]: value,
    })
}
const handleDays=(e)=>{  
    const { name, checked } = e.target;      
    setDays({
      ...days,
      [name]: checked,
    })
}
  const handleSubmit= async(e)=>{
    e.preventDefault
    const selectedDays = Object.keys(days).filter(day => days[day]);
    const form ={
      name:formData.name,
      startTime:formData.startTime,
      endTime:formData.endTime,
      day:selectedDays,
      teachers:assignTeacher
    }
    console.log(form);
    
    try{

      const res= await fetch(`${config.backendUrl}/${config.apiEndPoint}/create/create-classroom`,{
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        method:'POST',
        body:JSON.stringify(form),
        credentials:'include'
      })
      console.log("this is res", res);
      if(res.status===200){
        toast.success("Classroom Created Successfully")
      }
      if(res.status===400){
        toast.error("All field are required")
      }
    }catch(error){
      if(error.status===400){
        toast.error("Please enter All reaquired field")
      }

      console.log(error)
    }
  }
  return (
    <main className="h-screen flex relative p-3 justify-center items-center font-serif w-full">
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    <div className="bg-[#202020] py-5 px-10 rounded-3xl">
      <h3 className="text-xl text-white text-center">Create ClassRoom</h3>
      <InputBox value={formData.name} onChange={handleChange} className="mt-5" required InputStyle="w-80 p-3" placeholder="Enter Name of ClassRoom" type="text" name="name"/>
      <InputBox value={formData.email} onChange={handleChange} className="mt-5" required InputStyle="w-80 p-3" placeholder="Enter start time" type="time" name="startTime"/>
      <InputBox value={formData.password} onChange={handleChange} className="mt-5 mb-2" required InputStyle="w-80 p-3" placeholder="Enter end time " type="time" name="endTime"/>
      <div className='grid grid-cols-2'>
      <InputBox checked={days.Sunday} onChange={handleDays} className=" flex items-center gap-2 justify-center text-white" InputStyle='' type="checkbox" name="Sunday" label="Sunday"/>
      <InputBox checked={days.Monday} onChange={handleDays} className=" flex items-center gap-2 justify-center text-white" InputStyle='' type="checkbox" name="Monday" label="Monday"/>
      <InputBox checked={days.Tuesday} onChange={handleDays} className=" flex items-center gap-2 justify-center text-white" InputStyle='' type="checkbox" name="Tuesday" label="Tuesday"/>
      <InputBox checked={days.Wednesday} onChange={handleDays} className=" flex items-center gap-2 justify-center text-white" InputStyle='' type="checkbox" name="Wednesday" label="Wednesday"/>
      <InputBox checked={days.Thursday} onChange={handleDays} className=" flex items-center gap-2 justify-center text-white" InputStyle='' type="checkbox" name="Thursday" label="Thursday"/>
      <InputBox checked={days.Friday} onChange={handleDays} className=" flex items-center gap-2 justify-center text-white" InputStyle='' type="checkbox" name="Friday" label="Friday"/>
      <InputBox checked={days.Saturday} onChange={handleDays} className=" flex items-center gap-2 justify-center text-white" InputStyle='' type="checkbox" name="Saturday" label="Saturday"/>

      </div>
      <select value={assignTeacher} onChange={(e)=>setAssignTeacher(e.target.value)} className="w-full text-black p-3 my-5" id="classroom">
            <option className="text-black" value="">Select a Teacher</option>
            {teachers &&
              teachers.map((teacher) => (
                <option className="text-black" key={teacher._id} value={teacher._id}>
                  {teacher.name || teacher.email}
                </option>
              ))}
          </select>
      <InputBox onClick={handleSubmit} className="mt-5 text-center font-bold " required InputStyle="w-fit cursor-pointer transition duration-300 ease-out hover:bg-white py-2 px-5  bg-[rgba(230,187,0,1)] "  type="submit" value="Submit"/>
    </div>
  </main>
  )
}

export default CreateClassroom
