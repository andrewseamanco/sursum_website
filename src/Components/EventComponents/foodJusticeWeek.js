import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./../ImageSlider.js";
import './../ImageSlider.css';
import fjw1 from './../../images/fjw1.jpg'
import fjw2 from './../../images/fjw2.png'
import tabling from './../../images/tabling.JPG'

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

export default function FoodJusticeWeek(props) {

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
    <div className="yellow-background">
    <p className="title-1">Food Justice Week</p>
    <hr />
    {
      dimensions.width > 800 ?
      <ImageSlider
        settings={twoSlideSettings}
        firstImage={fjw1}
        secondImage={fjw2}
        thirdImage={tabling}
      /> :
      <ImageSlider
        settings={oneSlideSettings}
        firstImage={fjw1}
        secondImage={fjw2}
        thirdImage={tabling}
      />
    }
    <p className="event-description">Sursum Corda hosts an event every year called Food Justice Week (previously known as Hunger Awareness Week).  Food Injustice week
    gives Sursum Corda an opportunity to advocate for the communites most heavily affected
    by issues of food insecurity, host events educating LMU students about food insecurity,
    and raise money for our placements and other foundations which educate or serve communities
    facing food insecurity. In order to achive our three goals, members of Sursum Corda will
    set up a table on Palm Walk selling sustainably made items (shirts, reusable straws, etc.)
    and advertise education events hosted by Surusm throughout the week.  </p>
    </div>

  )
}
