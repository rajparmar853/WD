import React, { useState } from 'react'
import Home from '../Home'
import About from '../About'
    import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from '../Navbar';
import JsonCrud from '../JsonCrud';

  
const Index = () => {

  return (
    <>

      {/* <Router>
        <ul>

          <li>
            <Link to="/" >Home</Link>
          </li>
      
          <li>
            <Link to="About">About</Link>
          </li>
        
        </ul>
        
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>

      </Router> */}
      {/* <Navbar/> */}
      <JsonCrud/>
    </>
  )
}

export default Index