import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';


function App(props) {
  return (
  <div className='App'>
      <header className='App-header'>
      <h2>
         TOP LINE
      </h2>
    </header>
    <aside className='App-content-right'>
      <nav>
        <ul>
          <li>
            <h5>melu p 4</h5>
          </li>
        </ul>
      </nav>
    </aside>
      <main className='App-content-left'>
        <section>
          <h1>Съёмки фильма Полипропилен</h1>
          <p>
              История о том, как снимали фильм, где герои отдыхали на пляже, потом пришёл антагонист, избил протагонистов, бросил их в бассейн, и что из этого получилось.
          </p>
        </section>
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
        <article>
          <h1>Article</h1>
            История о том, как возле столовой появились загадочные розовые
            следы с шестью пальцами, и почему это случилось.
        </article>
      </main>
      <footer className='App-footer'>
        Copyright Gavrilov Wladimir
      </footer>
    </div>
  );
}

export default App;
