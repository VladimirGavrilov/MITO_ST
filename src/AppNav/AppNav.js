import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";


 function AppNav(props) {
    const menuNavLinks = props.NavLinks;
    const navLinks = menuNavLinks.map( item => <li><a href={item.hrefNavLink}><h5>{item.nameNavLink}</h5></a></li>)
  return(
        <nav className= {props.navClass}>            
            <ul>{ navLinks}</ul>
        </nav>
  )
}
 export default AppNav

               