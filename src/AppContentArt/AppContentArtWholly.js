import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";


 function AppContentArtWholly(props) {
    const articleContent= props.articleContent;
     return (
         <div className='App-content-art-wholly'>
                <article >
                    <h1>{articleContent[0].articleTitlle}</h1>
                    <p>{articleContent[0].articleContent}</p>
                </article>
              </div>

     )


 }
 export default AppContentArtWholly

               