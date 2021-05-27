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
            <div className='App-content-articles'>
              <div className='App-content-art-wholly'>
                <article >
                    <h1>Article wholly</h1>
                    <p>
                      Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление однозначно определяет каждого участника как способного принимать собственные решения касаемо системы обучения кадров, соответствующей насущным потребностям. Господа, перспективное планирование обеспечивает широкому кругу (специалистов) участие в формировании инновационных методов управления процессами. Есть над чем задуматься: представители современных социальных резервов призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований. В целом, конечно, социально-экономическое развитие в значительной степени обусловливает важность стандартных подходов. В своём стремлении улучшить пользовательский опыт мы упускаем, что базовые сценарии поведения пользователей, вне зависимости от их уровня, должны быть объявлены нарушающими общечеловеческие нормы этики и морали. Безусловно, консультация с широким активом требует анализа дальнейших направлений развития.
                  </p>
                    <p>
                      Но выбранный нами инновационный путь создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса модели развития. С учётом сложившейся международной обстановки, перспективное планирование играет важную роль в формировании поэтапного и последовательного развития общества.

                    </p>
                    <p>
                      А также предприниматели в сети интернет, инициированные исключительно синтетически, описаны максимально подробно. Но реплицированные с зарубежных источников, современные исследования, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут призваны к ответу.
                    </p>
                      <p>
                        В целом, конечно, базовый вектор развития прекрасно подходит для реализации переосмысления внешнеэкономических политик. Прежде всего, консультация с широким активом влечет за собой процесс внедрения и модернизации благоприятных перспектив. Убеждённость некоторых оппонентов позволяет оценить значение первоочередных требований. В своём стремлении улучшить пользовательский опыт мы упускаем, что непосредственные участники технического прогресса ограничены исключительно образом мышления. Каждый из нас понимает очевидную вещь: перспективное планирование однозначно определяет каждого участника как способного принимать собственные решения касаемо стандартных подходов. Современные технологии достигли такого уровня, что синтетическое тестирование обеспечивает широкому кругу (специалистов) участие в формировании приоритизации разума над эмоциями.
                    </p>
                    <p>
                      Равным образом, синтетическое тестирование создаёт предпосылки для кластеризации усилий. Имеется спорная точка зрения, гласящая примерно следующее: явные признаки победы институционализации будут преданы социально-демократической анафеме.
                  </p>
                </article>
              </div>
            <div className='App-content-art-preview'>
            <article>
            <h1>Article preview</h1>
                  <p>
                    История о том, как проходила студия изучения языка эсперанто, в то время, как над ней, на веранде велась студия приколистов, где травились анекдоты, и что из этого получилось.
                  </p>
                  <button>Подробнее ></button>
                </article>

          </div>
              

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
