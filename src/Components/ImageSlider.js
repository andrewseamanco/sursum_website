import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ImageSlider.css';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1
};

export default function ImageSlider() {
  return (
          <div className="sliderContainer">
            <Slider {...settings} >
              <div className="wdt">
                <img  src= {'assets/carouselOne.jpg'} className="img" alt="Surusm retreat 2019"/>
              </div>
              <div className="wdt">
                <img src= {'assets/carouselTwo.jpg'} className="img" alt="Sursum littles gathered around Loyola Marymount's dedicated Sursum tree"/>
              </div>
              <div className="wdt">
                <img src= {'assets/carouselThree.jpg'} className="img" alt="Sursum members serving at St. Francis"/>
              </div>
            </Slider>
        </div>
      );
}
