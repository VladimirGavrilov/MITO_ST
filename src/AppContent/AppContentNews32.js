import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function AppContentNews(props) {
    const croppingText = props.croppingText;
    const contNews = props.contNews ;
    let i =  getRandomInt(contNews.length)
    let i2 =  getRandomInt(contNews.length)
    let i3 =  getRandomInt(contNews.length)
    return (
        <div className='App-content-on_and_two'>
            <div className='App-content-1col'>
                <section>
                    <img src={contNews[i].img} alt={contNews[i].title} width='100'/>
                    <h1>{contNews[i].title}</h1>                
                    <p>
                        {croppingText(contNews[i].content, 2)}
                    </p>
                </section>
            </div>
            <div className='App-content-2row'>
                <section>
                    <img src={ contNews[i2].img } alt={ contNews[i2].title } width="10%"/>
                    <div>
                        <h1>{ contNews[i2].title }</h1>                                
                        <p> {croppingText( contNews[i2].content, 1)}</p>
                    </div>          
                </section>
                <section>
                    <img src={contNews[i3].img} alt={contNews[i3].title} width="10%"/>
                    <div>
                        <h1>{contNews[i3].title}</h1>                                
                        <p>{croppingText(contNews[i2].content, 1)}</p>
                    </div>          
                </section>
            </div>
        </div>
        
        
        
        )
    }
export default AppContentNews