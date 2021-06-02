import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppContentRightNav from '../AppNav/AppContentRightNav'

function AppContentRight(props) {
    return (<aside className='App-content-right'><AppContentRightNav NavLinks={props.NavLinks} /></aside>)
}

export default AppContentRight