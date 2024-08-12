import React from "react";
import DashNav from "../DashNav";

function AdminDashBoard({children}) {
  return (
    <>
      <main className="w-full h-screen  grid grid-cols-1 md:grid-cols-[1fr_3fr]">
        <div className="row-span-4 hidden md:block h-full">
          <DashNav />
        </div>
        <div className="w-full flex flex-col  font-serif items-center justify-center bg-[#FFD100] bg-no-repeat bg-contain bg-center bg-[url('/shining-fill.svg')]">
        <div>Welcome to</div>
        <div className='flex flex-col items-center'><span className='font-bold text-2xl md:text-3xl font-serif text-green-400'>Springdale </span><span className='text-white font-bold'>Public School</span>
          </div>        
        </div>
        <div className="w-full overflow-auto py-32 inline-flex justify-center items-center row-span-3 h-full">
          {children}
        </div>
      </main>
    </>
  )
}

export default AdminDashBoard;
