import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import state from './redax/state'
import AppContentCards from './AppContentCards/AppContentCards';
import AppContentBanners from './AppContentBanners/AppContentBanners';
import AppContentArtWholly from './AppContentArt/AppContentArtWholly';
import AppContentArtPreview from './AppContentArt/AppContentArtPreview';
import AppContentNews from './AppContent/AppContentNews32';
import AppContentRight from './AppContent/AppContentRight'
import Header from './Header/Header';
import AppTop from './AppTop';
import {croppingText } from './redax/state'
import './App.css';


function App(props) {
 
  return (
      <BrowserRouter>
        <div className='App'>
          <div className='wrapper'>
            <Header />
            <AppTop NavLinks= {state.NavLinks} />   
                   
            <div className='App-content'>
              <Route  path='/works' render={() => <AppContentRight NavLinks={state.NavLinksWork}/> } /> 
              
              <main className='App-content-left'>
                  <Route  path='/news' render={
                                                  () => <AppContentNews contNews={state.contNews} croppingText={croppingText}/> 
                                                  } />
                  <Route  path='/news' render={
                                                  () => <AppContentCards content= {state.contNews}/> 
                                                  } />
                  
              </main>
              </div>
            <div className='App-content-articles'>
              <Route  path='/articleContent' render={
                                                  () => <AppContentArtWholly articleContent= {state.articles}/> 
                                                  } />             
              <AppContentArtPreview articleContent={state.articles} croppingText={croppingText}/>
            </div>
            
            <AppContentCards content= {state.cards}/>      
            <AppContentBanners banners= {state.banners}/>           
            <footer className='App-footer'>Copyright Gavrilov Wladimir</footer>
          </div>                    
        </div>
      </BrowserRouter>
  );
}

export default App;
