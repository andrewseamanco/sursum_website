import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ImageSlider.css';

import carouselOne from './../images/CarouselOne.jpg'
import carouselTwo from './../images/CarouselTwo.jpg'
import carouselThree from './../images/CarouselThree.jpg'

export default function ImageSlider(props) {

  return (
          <div className="sliderContainer">
            <Slider {...props.settings} >
              <div className="wdt">
                <img  src= {carouselOne} className="img" alt="Surusm retreat 2019"/>
              </div>
              <div className="wdt">
                <img src= {carouselTwo} className="img" alt="Sursum littles gathered around Loyola Marymount's dedicated Sursum tree"/>
              </div>
              <div className="wdt">
                <img src= {carouselThree} className="img" alt="Sursum members serving at St. Francis"/>
              </div>
            </Slider>
        </div>
      );
}
