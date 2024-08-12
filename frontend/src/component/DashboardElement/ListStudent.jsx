import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../utils/Card';
function ListStudent() {
  const users=useSelector((state)=>state.user)
  const stutents=users["students"]
  console.log("list of user",stutents);
  
  return (
    <div className='w-full h-auto mt-32 relative flex flex-col gap-5 items-center'>
    {stutents && stutents.map((user, index) => 
      <Card details={user} key={index} />
    )}
  </div>
  )
}

export default ListStudent
