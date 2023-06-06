import React from 'react'
import { useRouter } from 'next/router'


function Homee() {
  const router = useRouter();
  console.log(router)

  return (
    <>
    <div className='flex items-center justify-center h-screen'>
      <div className="video-container">
      <video src="/assests/blood-21617.mp4" autoPlay loop muted >
</video>

  
      <div className="intro-text  items-center justify-center text-xl ">
      <div className="wrapper">
    <div className="static-txt"></div>
    <ul className="dynamic-txts">
      <li><span>Welcome To DIU BloodLine</span></li>
      <li><span>Give Blood</span></li>
      <li><span>Save Life</span></li>
    </ul>
  </div>
        <div className='flex gap-5'>
        <div onClick={(func) => router.push(`/Home/Login`)} className='bg-red-500 cursor-pointer text-white font-bold rounded-lg border text-sm shadow-lg p-10 bg-opacity-30 hover:bg-red-700'>Log In</div>
      <div onClick={(funct) => router.push(`/Home/Signup`)} className='bg-red-500 bg-opacity-30 cursor-pointer text-sm hover:bg-red-700  text-white font-bold rounded-lg border shadow-lg p-10'>
        Sign Up
      </div>
        </div>

      
    </div>
      </div>
    </div>

    
   
   
  
    </>
    
  )
}

export default Homee