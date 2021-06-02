import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
 function AppContentCard(props) {
     const content = props.content;
     const contentCard = content.map( (card) => 
            <section className='App-content-card'>
                <h3>{card.titlle}</h3>
                <p>{card.content}</p>
            </section>
              )     
     return (<div className='App-content-cards'>{contentCard} </div>)


 }
 export default AppContentCard