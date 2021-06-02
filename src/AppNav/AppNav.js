import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";


function addList(myArr, fn) {
  return myArr.map( (item) => fn(item))
  
}



function addLi(parm) {
   return(
    <div><a href={parm.hrefNavLink}><h5>{parm.nameNavLink}</h5></a></div>
  )
}

 function AppNav(props) {
   const NavLinks = props.NavLinks;
    const navLinks = addList(NavLinks, addLi)
  return(
        <nav className= {props.navClass}>            
            <div>{navLinks}</div>
        </nav>
  )
}
 export default AppNav

               