import React from 'react'

function Card({className="",details,...rest}) {
  console.log(details);
  const date=new Date()
  return (
    <div className={`card-gradient font-serif pb-8 rounded-2xl items-center w-4/5 text-white flex flex-col ${className}`}>
      <span className='bg-green-300 place-self-start w-fit px-5 py-2 rounded-full'>Created At: {date.toDateString(details.createdAt)}</span>
      <h3 className='text-3xl'>{details.name || details.email}</h3>
      {details.role &&
      <span>Role: {details.role}</span>}
    </div>
  )
}

export default Card
