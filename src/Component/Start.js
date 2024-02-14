import React from 'react'
import Navbar from './Navbar'

function Start() {
  return (
    <div className='container-fluid'>
    <Navbar/>
    <div className='container'>
        <h2>Welcome to PopX</h2>
        <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus, nulla inventore harum doloremque rerum deleniti eaque exercitationem tenetur! 
        Qui nam eius est sapiente ipsa possimus tenetur explicabo? Quas, iure.</label>

        <button className='btn btn-primary'>Create Account</button>
        <button className='btn btn-primary'>Already Register ? Login</button>
    </div>
    </div>
  )
}

export default Start
