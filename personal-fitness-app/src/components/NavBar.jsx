import React from 'react'
import "../styles/navbar.css"
import {Route, Routes, Link} from "react-router-dom"


function NavBar() {
  return (
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/fitness-display">Fitness</Link>



        <div className="nav-content">
            <h1>Personal Fitness App</h1>


        </div>
    </nav>
  )
}

export default NavBar