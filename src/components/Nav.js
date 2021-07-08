import React from 'react';
import { ReactDOM } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const  Nav= ()=>{
    return (
      
            <nav>
               <Link to = "/">
               <img src ="./public/home.png" alt= "homelogo"/>
               </Link>
            </nav>

      
    )

}

export default Nav;