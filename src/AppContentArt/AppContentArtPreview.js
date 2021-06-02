import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";


 function AppContentArtPreview(props) {
      const articleContent = props.articleContent;
      const croppingText = props.croppingText
      let litlText = croppingText(articleContent[0].content, 3)
      return (
         <div className='App-content-art-wholly'>
                <article >
                  <h1>{articleContent[0].titlle}</h1>
                  <p>{litlText}</p>
                    
                <button >Подробнее</button>
                </article>
              </div>

     )


 }
 export default AppContentArtPreview
