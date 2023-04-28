
import {  Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Home";
import Exercise from "./Exercise";
// import Contact from "./Contact";
// import Sdata from "./Sdata";
// import Card from "./Card";

import Contact from "./Contact";
import Membership from "./Membership"
import Service from "./Service";
import Navbar from "./Navbar";
import "./index.css"

const App = () => {
  return (<>
    
    
      <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route   path="service" element={<Service />} />
          <Route  path="contact" element={<Contact />} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="membership" element={<Membership />} />

        
      </Routes>
    
    <Navbar/>
    </>
  );
}
export default App;

