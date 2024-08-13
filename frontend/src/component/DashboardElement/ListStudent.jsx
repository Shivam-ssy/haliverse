import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../utils/Card';
function ListStudent() {
  const users=useSelector((state)=>state.user)
  const stutents=users["students"]
  console.log("list of user",stutents);
  
  return (
    <div className='w-full h-full flex flex-col items-center gap-2 py-10'>
    {stutents && stutents.map((user, index) => 
      <Card details={user} key={index} />
    )}
  </div>
  )
}

export default ListStudent
