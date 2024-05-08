import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <header className="">
<img src="/pics/logo.webp" alt="" />
  <nav>
  <Link to="/">Home</Link>
    <Link to="/Contact">Contact</Link>
    <div className="dropdown">
      <a href="#" style={{ paddingRight: '40px' }}>Courses</a>
      <div className="dropdown-content">
        <Link to="/Javafullstack">Javafullstack</Link>
        <Link to="/Pythons">Python</Link>
        <Link to="/Mern">Mern</Link>
      </div>
    </div>
    <a href="#" style={{ color: 'white' }}><button>About Us</button></a>
  </nav>
</header>
    </>
  )
}

export default Header