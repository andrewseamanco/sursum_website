import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./../ImageSlider.js";
import "./../ImageSlider.css";
import broomball1 from "./../../images/broomball1.jpg";
import broomball2 from "./../../images/broomball2.png";
import ratKing from "./../../images/ratKing.JPG";
import "./events.css";

const oneSlideSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const twoSlideSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export default function Broomball(props) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="gray-background">
      <p className="title-1">Broomball</p>
      <hr />
      {dimensions.width > 800 ? (
        <ImageSlider
          settings={twoSlideSettings}
          firstImage={broomball1}
          secondImage={broomball2}
          thirdImage={ratKing}
        />
      ) : (
        <ImageSlider
          settings={oneSlideSettings}
          firstImage={broomball1}
          secondImage={broomball2}
          thirdImage={ratKing}
        />
      )}
      <p className="event-description">
        Every year, Sursum Corda gears up for the most epic battle of the Sursum
        Corda calendar year. The sport is called broomball and the opponents
        are, our friends, the Ignatian service organization. Broomball is played
        on an ice rink where each player is equipped with a broom. Players
        scuttle across the ice trying to push either of the two active balls
        into the goal of the opponent. Sursums employ some super secret
        strategies that have been passed down throughout the generations while
        competing for the crown. After the event one very deserving member of
        Sursum is bestowed with the highest honors attainable (in Sursum Corda
        broomball) the Rat King (see last photo).{" "}
      </p>
    </div>
  );
}
