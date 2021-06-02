import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

function AppContent1Col(props) {
    const croppingText = props.croppingText
    const contNews = props.contNews    
    let litlText = croppingText(contNews[3].articleNewsContent, 1)
        return (<div className='App-content-1col'>
            <section>
                <img src={contNews[3].articleNewsImg} alt={contNews[3].articleNewsTitle} width='100'/>
                <h1>{contNews[3].articleNewsTitle}</h1>                
                <p>
                    {litlText}
                  </p>
            </section>
        </div>)
    }
export default AppContent1Col