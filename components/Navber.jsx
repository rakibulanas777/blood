import React from 'react'
import { useRouter } from 'next/router';

function Navber() {
    const router = useRouter();
  console.log(router)
  return (
    <div>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">DIU BloodLine</a>
  </div>
  <div className="flex-none gap-2">
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    
      <li><a className='active text-red-400 hidden sm:block'>Home</a>
      </li>
      <li tabIndex={0}>
        <a>
          <span className='hidden sm:block'>Blood Bank</span> 
          <svg className="fill-current hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li><a onClick={(func) => router.push(`/Dashboard/Bloodbank/Neardaffodil`)} className='hover:bg-gray-100'>Near Daffodil</a></li>
          <li><a  onClick={(func) => router.push(`/Dashboard/Bloodbank/Farfromdaffodil`)}  className='hover:bg-gray-100'>Far From Daffodil</a></li>
        </ul>
      </li>
      <li><a onClick={(func) => router.push(`/Dashboard/Activities`)}  className='hidden sm:block'>Activities</a></li>
    </ul>
  </div>

    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/assests/326443372_570451258300197_4422673062628995501_n.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 bg-white p-2 shadow menu menu-compact dropdown-content  rounded-box w-52">
        <li>
          <a onClick={(func) => router.push(`/Dashboard/profile`)} className="justify-between hover:bg-gray-100">
            Profile
            <span className="badge ">New</span>
          </a>
        </li>
        <li><a onClick={(func) => router.push(`/Dashboard/Settings`)}  className='hover:bg-gray-100'>Settings</a></li>
        <li><a  className='hover:bg-gray-100' onClick={(func) => router.push(`/Home`)}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navber