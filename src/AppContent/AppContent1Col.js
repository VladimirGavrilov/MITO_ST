import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
function croppingText(txtB, contStr) {
    return txtB.split(".").slice(0, contStr).join('.');
}

function AppContent1Col(props) {
    const contNews = props.contNews    
    let litlText = croppingText(contNews[3].articleNewsContent, 2)
        return (<div className='App-content-1col'>
            <section>
                <img src={contNews[3].articleNewsImg} alt={contNews[3].articleNewsTitle} width='150'/>
                <h1>{contNews[3].articleNewsTitle}</h1>                
                <p>
                    {litlText}
                  </p>
            </section>
        </div>)
    }
export default AppContent1Col