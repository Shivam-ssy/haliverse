import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User, { getStudents, getTeachers } from "../store/feature/User";
import { Link } from "react-router-dom";
function DashNav() {
  const dispatch=useDispatch()
  const student=useSelector((state)=>state.User)
  console.log(student);
  
  const listStudent= ()=>{
    dispatch(getStudents())
  }
  const listTeacher=()=>{
    dispatch(getTeachers())
  }
  return (
    <>
      <main className="w-96 h-screen text-white opacity-90 bg-[#202020]">
        <div>
          <details className="flex flex-col gap-5 p-5">
            <summary className="list-none transition-all duration-500 ease-out w-full text-center rounded-xl cursor-pointer font-serif bg-[#4e4376] font-bold text-3xl">Student</summary>
           <Link to="/dashboard/create-student"> <button className="text-lg px-3 my-3 bg-black w-full rounded-xl">Create Student</button></Link>
           <Link to="/dashboard/list-student"> <button onClick={listStudent} className="text-lg px-3 bg-black w-full rounded-xl" >List Students</button></Link>
          </details>
          <details className="flex flex-col gap-5 p-5">
            <summary className="list-none transition-all duration-500 ease-out w-full text-center rounded-xl cursor-pointer font-serif bg-[#4e4376] font-bold text-3xl">Teacher</summary>
           <Link to="/dashboard/create-teacher"> <button className="text-lg px-3 my-3 bg-black w-full rounded-xl">Create Teacher</button></Link>
           <Link to="/dashboard/list-teacher"> <button onClick={listTeacher} className="text-lg px-3 bg-black w-full rounded-xl" >List Teacher</button></Link>
          </details>
          <details className="flex flex-col gap-5 p-5">
            <summary className="list-none transition-all duration-500 ease-out w-full text-center rounded-xl cursor-pointer font-serif bg-[#4e4376] font-bold text-3xl">Class Room</summary>
           <Link to="/dashboard/create-classroom"> <button className="text-lg px-3 my-3 bg-black w-full rounded-xl">Create Classroom</button></Link>
           <Link to="/dashboard/list-classroom"> <button className="text-lg mb-3 px-3 bg-black w-full rounded-xl" >List All Classroom</button></Link>
           <Link to="/dashboard/assign-classroom"> <button className="text-lg mb-3 px-3 bg-black w-full rounded-xl" >Assign a teacher to classroom</button></Link>
           <Link to="/dashboard/add-classroom"> <button className="text-lg px-3 bg-black w-full rounded-xl" >Add a student to classroom</button></Link>
          </details>
        </div>
      </main>
    </>
  )
}

export default DashNav;
