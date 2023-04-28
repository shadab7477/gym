import React from 'react'
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';

import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <>
    <div id='mainimg' >
<div id='content' className=''>
<p  className='fs-1' >step up your </p>
<p  > <span   className='text-white  '> fitness</span> <span className='fs-1'> with us </span> </p>
 <NavLink to="/membership" ><button className='animated' id='mainbutton' size="large"  variant="contained" endIcon={<SendIcon />}>
    join us  <GroupIcon size="large"  />
</button>
</NavLink> 
</div>
    </div>
    </>
  )
}

export default Home