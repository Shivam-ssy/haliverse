import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../utils/Card';
function ListTeachers() {
  const users=useSelector((state)=>state.user)
  const teachers=users["teachers"]
  console.log("list of user",teachers);
  
  return (
    <div className='w-full flex flex-col gap-5 items-center'>
    {teachers && teachers.map((user, index) => 
      <Card details={user} key={index} />
    )}
  </div>
  )
}

export default ListTeachers
