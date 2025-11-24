import React from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom"



function NavBar() {
  return (
    <div className="nav-content">
      <nav className='nav'>
        <Link to="/" className='home-link'>Home</Link>
        <Link to="/fitness-display" className='fitness-link'>Fitness</Link>
        <Link to="/about" className='about-link'>About</Link>
      </nav>
    </div>
  )
}

export default NavBar