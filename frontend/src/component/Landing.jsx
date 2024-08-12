import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <main className="margarine-regular bg-[#FFD100] scroll-smooth">
          <div className="w-full flex justify-center">
            <Navbar />
          </div>
        <div id="home" className="w-full h-screen bg-[#FFD100] bg-[url('/shining-fill.svg')] bg-no-repeat bg-center margarine-regular flex flex-col items-center justify-around">
        <div className="w-full flex flex-col items-center mt-20 ">

          <h1 className="text-6xl mb-10 w-2/3 text-center">
            Discover our world, where education meets exploration.
          </h1>
          <span>Login to continue</span>
         <Link to="/login"> <button className="px-5  rounded-xl py-2 font-bold text-[#FFEE32] bg-[#202020] text-lg">Login</button></Link>
        </div>
        </div>
        <div  className="w-full md:h-[50vh] flex justify-center items-center py-10">
          <div className="md:w-1/2 w-fit flex gap-4 flex-col px-5 items-center text-center">
            <img className="h-20 m-auto" src="/sparkling-2-fill.svg" alt="" />
            <h2 className="text-5xl font-bold ">Learn More</h2>
            <span className="text-center">
              Join our vibrant school community where education isn’t just about
              getting the grades, it’s about creating leaders, innovators, and
              lifelong learners. Kick-start your journey with us today.
            </span>
            <button className="text-[#FFEE32] bg-[#202020] w-fit px-5 font-mono rounded-xl py-2">
              Start Exploring
            </button>
          </div>
        </div>
        <div id="aboutus" className="w-full bg-[#202020] px-10 md:px-32 py-20 text-white">
          <h3 className="text-2xl font-semibold">About Us</h3>
          <div className="flex flex-col md:flex-row justify-around gap-32 mt-20">
            <div>
              Founded in 1927, our school is steeped in history and academic
              prestige. Our students consistently perform at the top of their
              classes making us proud every time. We believe that investing in
              our students is investing in the future.
            </div>
            <div>
              As a bedrock of community development, we’ve produced a plethora
              of successful leaders, scientists, artists, and entrepreneurs. Our
              proven record innumerable awards in sports, arts, and community
              service.
            </div>
          </div>
        </div>
        <div id="gallery" className=" w-full px-10 md:px-32 py-32 bg-[#202020] text-white">
          <div>
            <h3 className="text-2xl font-semibold">Our Moments</h3>
            <div className="grid  w-full place-items-center gap-10 grid-cols-1 mt-10 md:grid-cols-2 ">
              <img
                className="rounded-3xl w-96 md:h-[300px]"
                src="/moment1.jpg"
                alt=""
              />
              <img
                className="rounded-3xl w-96 row-span-2 md:h-[600px]"
                src="/moment2.jpg"
                alt=""
              />
              <img
                className="rounded-3xl w-96 row-span-2 md:h-[600px]"
                src="/moment3.jpg"
                alt=""
              />
              <img
                className="rounded-3xl w-96 md:h-[300px]"
                src="/moment4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="contact" className="flex justify-center items-center h-[20vh] bg-[#202020] text-white">
          <div >
            <h3 className="text-center text-3xl mb-10">Contact Us</h3>
            <div className="flex gap-10">
              <img className="h-10" src="/facebook-circle-fill.svg" alt="" />
              <img className="h-10" src="/twitter-fill.svg" alt="" />
              <img className="h-10" src="/instagram-fill.svg" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
