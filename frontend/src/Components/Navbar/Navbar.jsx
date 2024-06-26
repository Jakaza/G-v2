import React , { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='navbar'>
      <div className="inner">
        <div className="logo">
          <img src={Logo} width="35px" alt="logo" />
        </div>
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰
        </div>
        <div className={`linksContainer ${sidebarOpen ? 'open' : ''}`}>
          <ul className='links'>
            <li>
              <a aria-current="page" className="" href="/">Home</a>
            </li>
            <li>
              <a href="/#about">About me</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#creative-coding">Creative coding</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar