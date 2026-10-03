import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
   <>
   
   <div className="bg-black text-white p-2 flex justify-around items-center">
    <div>logo</div>
  
        <h1>my name is dhanaseelan</h1>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/gallery">Gallery</Link>    
        <Link to="/course">Course</Link> 
        <Link to="/service">Service</Link>  
    
   </div>
   
   
   </>
  )
}

export default Navbar     