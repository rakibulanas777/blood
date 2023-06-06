import React from 'react'

export default function Dash() {
  return (
    <div>
<div className="hero min-h-screen" style={{ backgroundImage: `url("/assests/img.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
      <p className="mb-5 text-white">Search available Blood Donar!!!</p>
      <div className="form-control">
  <div className="input-group text-white">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>    </div>
  </div>
</div>

    </div>
  )
}
