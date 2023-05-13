import React from "react";  
import { NavLink } from "react-router-dom";
import {increaseFontSize} from '../App.js';
import {decreaseFontSize} from '../App.js';
import '../App.css';

function Header(){
    return (
      
        <nav>
              <NavLink to="/"> <a><p>Account</p></a></NavLink> 
              <NavLink to="/settings"><a><p>Settings</p></a></NavLink> 
              <NavLink to="/messages"><a><p>Messages</p></a></NavLink> 
               
        <a>
          <input className='form-control' placeholder="Search..." aria-label="Search" type='Search' />
       </a>
       
        </nav>

)}
export default Header;