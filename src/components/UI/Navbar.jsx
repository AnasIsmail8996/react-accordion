import React, { useState } from 'react'
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {

 const[showMenu, setShowMenu]=useState(false);

 const handleToggle=()=>{
    setShowMenu(!showMenu)
 }
  return (
    <>
    <header>
        <div className="container">
           <div className="grid navbar-grid">
            <div className='logo'>
                <h1>anasismailhz@gmail.com</h1>
            </div>

        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<div className="ham-menu">
  <button onClick={handleToggle} style={{ all: "unset" }}>
    <GiHamburgerMenu size={32}  />
  </button>
</div>



           </div>
        </div>
    </header>
    </>
  )
}

export default Navbar;