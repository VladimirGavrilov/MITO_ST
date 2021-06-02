import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import state from './redax/state'
import AppContentCards from './AppContentCards/AppContentCards';
import AppContentBanners from './AppContentBanners/AppContentBanners';
import AppContentArtWholly from './AppContentArt/AppContentArtWholly';
import AppContentArtPreview from './AppContentArt/AppContentArtPreview';
import AppContentRight from './AppContent/AppContentRight'
import AppContent1Col from './AppContent/AppContent1Col'
import Header from './Header/Header';
import AppTop from './AppTop';
import {croppingText } from './redax/state'
import './App.css';

function AppContent2Rrow(params) {
 return(
        <div className='App-content-2row'>
          <section>
            <h1>Хороший язык</h1>
            <p>
                История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
            </p>
          </section>
          <section>
            <h1>Хороший fязык2</h1>
            <p>
                История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
            </p>
          </section>
              </div>
 )
  
}

function App(props) {
 
  return (
  <div className='App'>
    <div className='wrapper'>
      <Header />      
      <AppTop NavLinks= {state.NavLinks} />       
        <div className='App-content'>
          <AppContentRight NavLinks={state.NavLinks}/>
          <main className='App-content-left'>
            <div className='App-content-on_and_two'>             
              <AppContent1Col contNews={state.contNews} croppingText={croppingText}/>
              <AppContent2Rrow />
            </div>
          </main>
        </div>
        <div className='App-content-articles'>
              <AppContentArtWholly articleContent= {state.articles}/>
              <AppContentArtPreview articleContent={state.articles} croppingText={croppingText}/>
        </div>
          <AppContentCards content= {state.cards}/>      
          <AppContentBanners banners= {state.banners}/>           
                <footer className='App-footer'>Copyright Gavrilov Wladimir</footer>
            </div>    
          </div>
  );
}

export default App;
