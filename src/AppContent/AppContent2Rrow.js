import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function AppContent2Rrow(props) {
  const croppingText = props.croppingText;
  const contNews = props.contNews ;
  let i =  getRandomInt(contNews.length)
  let i2 =  ((i +1 ) > contNews.length ) ? i - 1 : i + 1 ;
  let litlText = croppingText(contNews[i].content, 3)


  return(
      <div className='App-content-2row'>
        <section>
          <img src={contNews[i].img} alt={contNews[i].title} width="10%"/>
          <div>
            <h1>{contNews[i].title}</h1>                                
            <p>{litlText}</p>
          </div>          
        </section>
        <section>
          <img src={contNews[i2].img} alt={contNews[i2].title} width="10%"/>
          <div>
            <h1>{contNews[i2].title}</h1>                                
            <p>{litlText}</p>
          </div>          
        </section>
      </div>
 )
  
}

export default AppContent2Rrow
 