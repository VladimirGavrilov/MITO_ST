import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";



 function AppContentArtWholly(props) {
    const articleC = props.articleContent;
    const articleContent = articleC.map( (art) => (
         <article ><h1>{art.titlle}</h1><p>{art.content}</p>
         </article>))
     return (
         <div className='App-content-art-wholly'>{articleContent}</div>
         )


 }
 export default AppContentArtWholly

               