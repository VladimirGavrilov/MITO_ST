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
        <div className='App-top'>
         <nav className='App-top-nav'>
              <ul>
                <li><h5>melu p 1</h5></li>
                <li><h5>melu p 2</h5></li>
                <li><h5>melu p 3</h5></li>
                <li><h5>melu p 4</h5></li>
                <li><h5>melu p 5</h5></li>
                <li><h5>melu p 6</h5></li>
                <li><h5>melu p 7</h5></li>
                <li><h5>melu p 8</h5></li>
                <li><h5>melu p 9</h5></li>
                <li><h5>melu p 10</h5></li>
              </ul>
            </nav>
        </div>
        
        <div className='App-content'>
          <aside className='App-content-right'>
            <nav className='App-content-right-nav'>
              <ul>
                <li><h5>melu p 1</h5>                
                    <ul>
                      <li><h6>melu p 1</h6></li>
                      <li><h6>melu p 1</h6></li>
                      <li><h6>melu p 1</h6></li>
                      <li><h6>melu p 1</h6></li>
                    </ul>                  
                </li>
                <li>
                  <h5>melu p 1</h5>
                  <ul>
                      <li><h6>melu p 1</h6></li>
                      <li><h6>melu p 1</h6></li>
                      <li><h6>melu p 1</h6></li>
                      <li><h6>melu p 1</h6></li>
                    </ul>
                
                </li>
                <li><a href='#'><h5>melu p 1</h5></a></li>
                <li><a href='#'><h5>melu p 1</h5></a></li>
                <li><a href='#'><h5>melu p 1</h5></a></li>
                <li><a href='#'><h5>melu p 1</h5></a></li>
                <li><a href='#'><h5>melu p 1</h5></a></li>
                <li><a href='#'><h5>melu p 1</h5></a></li>
                <li><a href='#'><h5>melu p 1</h5></a></li>
                <li><a href='#'><h5>melu p 1</h5></a></li>
              </ul>
            </nav>
          </aside>
          <main className='App-content-left'>
            <div className='App-content-on_and_two'>
              <div className='App-content-1col'>
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
           <div className='App-content-separator'></div>
          <div className='App-content-cards'>
              <section className='App-content-card'>
                <h1>card 1</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 2</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 3</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 4</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 5</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 6</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 7</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 8</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 9</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>
              <section className='App-content-card'>
                <h1>card 10</h1>
                <p>
                  История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                      </p>
              </section>

            </div>
            <div className='App-content-separator'></div>
            <div className='App-content-banners'>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section><section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
              <section className='App-content-banner'>
                <a href="#">
                  <img src="https://kubsu.ru/sites/default/files/insert/page/mon_logo_0.png" alt="Пример"/>
                </a>
              </section>
            </div>           
                    
        <footer className='App-footer'>
          Copyright Gavrilov Wladimir
        </footer>
    </div>    
  </div>
  );
}

export default App;
