import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <header className="">
    <img  className='newlogo' src="/pics/newlogo.png" alt="" />
  <nav>
  <Link to="/">Home</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Portfolio">Portfolio</Link>
    <Link to="/Circle">Courses</Link>
    <a href="#" style={{ color: 'white' }}><button>About Us</button></a>
  </nav>
</header>
    </>
  )
}

export default Header