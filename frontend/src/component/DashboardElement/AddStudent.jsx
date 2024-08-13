import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import config from '../../config/config';
import axios from 'axios';
function AddStudent() {
  const data = useSelector((state) => state.user);
  const classrooms = data.classRoom;
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [classroom,setClassroom]=useState("")
  const students = data.students;
  const handleStudnetChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
    setSelectedStudents(selectedOptions);
  };
  const handleSubmit=async()=>{
      const response= await axios.post(`${config.backendUrl}/${config.apiEndPoint}/create/add-student`,{classroom,studentId:selectedStudents},{
        withCredentials:true
      })
      if(response.status===200){
        toast.success("Student Added Successfully")
        setSelectedStudents([])
        setClassroom("")
      }
      else{
        toast.error("Something went wrong")
      }
      console.log(response);
      
  }
  console.log("data at student", selectedStudents);
  return (
    <div>
      <main className="h-screen flex relative p-3 justify-center items-center font-serif w-full">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="bg-[#202020] flex flex-col justify-center items-center gap-5 py-5 px-10 rounded-3xl">
          <h3 className="text-3xl text-white text-center">
            Add A teacher to ClassRoom
          </h3>
          <div className="">

          <label className="text-xl text-white my-5" htmlFor="students">Select a ClassRoom:</label>
          <select value={classroom} onChange={(e)=>setClassroom(e.target.value)} className="w-full p-3 my-5" id="classroom">
            <option className="" value="">Select a ClassRoom</option>
            {classrooms &&
              classrooms.map((classroom) => (
                <option className="text-black" key={classroom._id} value={classroom._id}>
                  {classroom?.name}
                </option>
              ))}
          </select>
          </div>
          <div className="">

          <label className="text-xl text-white my-5" htmlFor="students">Select a Student:</label>
          <select  value={selectedStudents} onChange={handleStudnetChange} className="w-full text-black  p-3 my-5" id="classroom">
            <option className="text-black text-2xl" value="">Select a Student</option>
            {students &&
              students.map((student) => (
                <option className="text-black" key={student._id} value={student._id}>
                  {student.name || student.email}
                </option>
              ))}
          </select>
          </div>
          <button onClick={handleSubmit} className="px-5 self-center m-5 rounded-xl py-2 font-bold text-[#202020] bg-[#FFEE32] text-lg">Submit</button>
        </div>
      </main>
    </div>
  )
}

export default AddStudent
