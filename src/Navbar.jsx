import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GroupIcon from '@mui/icons-material/Group';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {NavLink}  from 'react-router-dom';

const navbar = () => {
  return (
    <>
     <nav class="nav" >
        <NavLink to="/"  className='nav-link' >    <HomeIcon  />   <span className='name' >HOME</span> </NavLink>
        <NavLink to="/service" className='nav-link' >  <SportsGymnasticsIcon  />  <span className='name' >SERVICE</span> </NavLink>
        <NavLink to="/exercise" className='nav-link' >  <FitnessCenterIcon  />   <span className='name' >EXERCISE</span> </NavLink>
        <NavLink to="/membership"  className='nav-link' >   <GroupIcon  /> <span  className='name'>PLANS</span> </NavLink>
        <NavLink to="/contact" className='nav-link'  > < AddIcCallIcon />   <span  className='name'>CONTACT US</span> </NavLink>

    </nav>
    </>
  )
}

export default navbar