import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppNav from './AppNav';

function AppContentRightNav(props) {
  return(             
    <AppNav NavLinks={props.menuNavLinks} navClass="App-content-right-nav"/>
  )
}
export default AppContentRightNav;