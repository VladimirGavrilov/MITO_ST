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
import './App.css';


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
              <AppContent1Col contNews={state.contNews}/>
              <div className='App-content-2row'>
                <section>
                  <h1>Хороший язык</h1>
                  <p>
                    История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
                </section>
                <section>
                  <h1>Хороший язык2</h1>
                  <p>
                    История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
                </section>
              </div>
            </div>
          </main>
        </div>
        <div className='App-content-separator'></div>
        <div className='App-content-articles'>
              <AppContentArtWholly articleContent= {state.articles}/>
              <AppContentArtPreview />            
        </div>
        <div className='App-content-separator'></div>
                <div className='App-content-cards'><AppContentCards content= {state.cards}/></div>
                <div className='App-content-separator'></div>
                <div className='App-content-banners'><AppContentBanners banners= {state.banners}/></div>            
                <footer className='App-footer'>Copyright Gavrilov Wladimir</footer>
            </div>    
          </div>
  );
}

export default App;
