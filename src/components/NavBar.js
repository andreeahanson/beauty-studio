import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/blush" className="nav-word">Blush</NavLink>
      <NavLink to="/bronzer" className="nav-word">Bronzer</NavLink>
      <NavLink to="/eyebrow" className="nav-word">Eyebrow</NavLink>
      <NavLink to="/eyeliner" className="nav-word">Eyeliner</NavLink>
      <NavLink to="/eyeshadow" className="nav-word">Eyeshadow</NavLink>
      <NavLink to="/foundation" className="nav-word">Foundation</NavLink>
      <NavLink to="/lipliner" className="nav-word">Lip Liner</NavLink>
      <NavLink to="/lipstick" className="nav-word">Lipstick</NavLink>
      <NavLink to="/mascara" className="nav-word">Mascara</NavLink>
      <NavLink to="/" className="nav-word red">Loves list</NavLink>
    </nav>
  )
}

export default NavBar;