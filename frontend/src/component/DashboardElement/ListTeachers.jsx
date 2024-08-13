import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../utils/Card';
function ListTeachers() {
  const users=useSelector((state)=>state.user)
  const teachers=users["teachers"]
  console.log("list of user",teachers);
  
  return (
    <div className='w-full h-full flex flex-col items-center gap-2 py-10'>
    {teachers && teachers.map((user, index) => 
      <Card details={user} key={index} />
    )}
  </div>
  )
}

export default ListTeachers
