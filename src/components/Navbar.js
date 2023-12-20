import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';



function Navbar() {
    const [openLinks, setOpenLinks] = useState(false); 

    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };

    

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <h1> Anne's Bakery </h1>
        <div className="hiddenLinks">
          <NavLink to="/" > Home </NavLink>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <NavLink to="/" activeclassname="active"> Home </NavLink>
        <NavLink to="/menu" activeclassname="active"> Menu </NavLink>
        <NavLink to="/about" activeclassname="active"> About </NavLink>
        <NavLink to="/contact" activeclassname="active"> Contact</NavLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
