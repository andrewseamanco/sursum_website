import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./ImageSlider.js";
import './ImageSlider.css';
import carouselOne from './../images/CarouselOne.jpg'
import carouselTwo from './../images/CarouselTwo.jpg'
import carouselThree from './../images/CarouselThree.jpg'

const isLoggedIn = false;

const oneSlideSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1
};

const twoSlideSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1
}

export default function AboutSursumSlider(props) {

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div>
    {
      dimensions.width > 800 ?
      <ImageSlider
        settings={twoSlideSettings}
        firstImage={carouselOne}
        secondImage={carouselTwo}
        thirdImage={carouselThree}
      /> :
      <ImageSlider
        settings={oneSlideSettings}
        firstImage={carouselOne}
        secondImage={carouselTwo}
        thirdImage={carouselThree}
      />
    }
    </div>

  )
}
