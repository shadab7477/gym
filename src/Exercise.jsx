
import React from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


import gif from "./gymgifs/gif2.gif"
import gif1 from "./gymgifs/gif.gif"
import gif2 from "./gymgifs/gif3.gif"
import gif3 from "./gymgifs/gif4.gif"
import gif4 from "./gymgifs/gif5.gif"
import gif5 from "./gymgifs/gif10.gif"
import gif6 from "./gymgifs/gif6.gif"
import gif7 from "./gymgifs/gif7.gif"
import gif8 from "./gymgifs/gif8.gif"
import gif9 from "./gymgifs/gif9.gif"
import gif10 from "./gymgifs/gif1.gif"
import gif11 from "./gymgifs/gif11.gif"



 const Exercise = () => {
  return (
    <>
    <div  className='container-fluid nav_bg ' >
<div className='row  pb-5 mb-5 ' >
    <div className='col-10 mx-auto ' > 
        <div id='servicemain' className='mt-1 mb-2'>
          <h1 id='main'  className='text-center  pt-5 pb-5 fs-1'>  <span  className='text-light  '> DEMO </span><span className='text-danger   '>EXERCISECISES  <FitnessCenterIcon  fontSize="large" /> </span> </h1>
          {/* <h4 id='main' className='text-center  pt-1 pb-4 '>  <span  className='text-light  '> SOME DEMO </span><span className='text-danger   '></span> </h4> */}
         
          <div className='row justify-content-around '>
    
          <div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
  <img className="card-img-top" src={gif} alt="Card image cap"/>
  
</div>
  
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
  <img className="card-img-top" src={gif1} alt="Card image cap"/>
  <div className="card-body">
    <h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>
    
    
  </div>
</div>
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
  <img className="card-img-top" src={gif2} alt="Card image cap"/>
  <div className="card-body">
    <h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>
    
    
  </div>
</div>
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
  <img className="card-img-top" src={gif3} alt="Card image cap"/>
  <div className="card-body">
    <h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>
    
    
  </div>
</div>
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
  <img className="card-img-top" src={gif4} alt="Card image cap"/>
  <div className="card-body">
    <h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>
    
    
  </div>
</div>
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
  <img className="card-img-top" src={gif5} alt="Card image cap"/>
  <div className="card-body">
    <h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>
    
    
  </div>
</div>
  
</div>
<div className='row justify-content-around '>
    
    <div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
<img className="card-img-top" src={gif6} alt="Card image cap"/>

</div>

<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
<img className="card-img-top" src={gif7} alt="Card image cap"/>
<div className="card-body">
<h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>


</div>
</div>
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
<img className="card-img-top" src={gif8} alt="Card image cap"/>
<div className="card-body">
<h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>


</div>
</div>
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
<img className="card-img-top" src={gif9} alt="Card image cap"/>
<div className="card-body">
<h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>


</div>
</div>
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
<img className="card-img-top" src={gif10} alt="Card image cap"/>
<div className="card-body">
<h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>


</div>
</div>
<div id='cards1' className="card mt-3 tb-3 " style={{width:"18rem"}}>
<img className="card-img-top" src={gif11} alt="Card image cap"/>
<div className="card-body">
<h5 id='mainbrand' className="card-title text-uppercase text-center"></h5>


</div>
</div>

</div>
        </div>
    </div>
</div>
</div>

    </>
  );
};
export default Exercise;