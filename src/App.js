import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';


function App(props) {
  return (
  <div className='App'>
    <div className='wrapper'>
        <header className='App-header'>
          <h2>
            TOP LINE
      </h2>
        </header>
        <div className='App-content'>
          <aside className='App-content-right'>
            <nav>
              <ul>
                <li><h5>melu p 4</h5></li>
              </ul>
            </nav>
          </aside>
          <main className='App-content-left'>
            <div className='App-content-on_and_two'>
              <div className='App-content-2col'>
                <section>
                  <h1>Съёмки фильма Полипропилен</h1>
                  <p>
                    История о том, как снимали фильм, где герои отдыхали на пляже, потом пришёл антагонист, избил протагонистов, бросил их в бассейн, и что из этого получилось.
                  </p>
                </section>
              </div>
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
        <footer className='App-footer'>
          Copyright Gavrilov Wladimir
      </footer>
    </div>    
  </div>
  );
}

export default App;
