import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function AppContent1Col(props) {
    const croppingText = props.croppingText
    const contNews = props.contNews  
    let i =  getRandomInt(contNews.length) 
    let litlText = croppingText(contNews[i].content, 3)
        return (
        <div className='App-content-1col'>
            <section>
                <img src={contNews[i].img} alt={contNews[i].title} width='100'/>
                <h1>{contNews[i].title}</h1>                
                <p>
                    {litlText}
                  </p>
            </section>
        </div>)
    }
export default AppContent1Col