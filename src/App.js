import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Wrapper">
      <header className="HeaderWr">
        <div>
          Верхняя синяя линия!
        </div>
        <nav>
          <button><a href="#">Об учреждении</a></button>
          <button><a href="#">Новости</a></button>  
          <button> <a href="#">Контакты</a></button>
          <button><a href="#">Направления деятельности</a></button>                   
        </nav> 
      </header>
      <section>
        <div>LOGO</div>
        <aside>
          <a href="#">МОЦ</a>
          <a href="#">Постановка на учет в ДОУ</a>
          <a href="#">Отдых летний</a>
          <a href="#">Трудоустройство несовершеннолетних</a>
        </aside>

      </section>
      <section>
        <div>
          <h3>Новости</h3>
          <div className="leftNews">
            Left
          </div>
          <div className="rigftNews">
            <div>
              RigftTop
            </div>
            <div>
              RigftBottom
            </div>
          </div>

        </div>
      </section>
      <footer>
        <div>
          <h3>
            Полезные ссылки
          </h3>
          <div className="bottomCards">
            <div className="cardsOne">
              <a href=""><img src="./img/1.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/6.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/9.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/1.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/6.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/9.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/1.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/6.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/9.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/1.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/6.jpg" alt="minObr" /></a>
              <a href=""><img src="./img/9.jpg" alt="minObr" /></a>
              
             

            </div>

          </div>
        </div>

      </footer>

    </div>
  );
}

export default App;
