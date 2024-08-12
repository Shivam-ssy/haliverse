import React from 'react'
import Card from '../../utils/Card'
import { useSelector } from 'react-redux'

function CurrentUser() {
    const auth =useSelector((state)=>state.auth)
  return (
    <div className='w-full flex justify-center'>
      <Card details={auth.currentUser}/>
    </div>
  )
}

export default CurrentUser
