import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";


 function AppContentBanners(props) {
     const banners = props.banners;
     const contentBanner= banners.map( (banner) => 
            <section className='App-content-banner'>
                    <a href= {banner.hrefBanner}>
                    <img src= {banner.srcImg} alt= {banner.altImg} />
                    </a>
            </section>
              )     
     return (<div className='App-content-banners'>{contentBanner}</div> )


 }
 export default AppContentBanners

               