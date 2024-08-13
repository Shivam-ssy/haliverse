import React from 'react'
import {useSelector} from "react-redux"
import Card from '../../utils/Card'
function ListClassroom() {
  const room=useSelector((state)=>state.user)
  // console.log("class room data",classroom);
  const classroom=room.classRoom
  return (
    <div className='w-full h-full flex flex-col items-center gap-2 py-10'>
    {classroom && classroom.map((user, index) => 
      <Card details={user} key={index} />
    )}
    </div>
  )
}

export default ListClassroom
