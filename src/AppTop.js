import React from 'react';
import AppNav from './AppNav/AppNav';

function AppTop(props) {
  const menuNavLinks = props.NavLinks
  return(
    <div className='App-top'>
      <AppNav NavLinks={props.menuNavLinks} navClass="App-top-nav"/>
    </div>
  )
}
export default AppTop;