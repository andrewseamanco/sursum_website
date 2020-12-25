import React from "react";
import "./PlacementContainer.css";
// import temp from '../images/sursumLogo.png'

export default function PlacementContainer(props) {
  let imgSrc = process.env.PUBLIC_URL;
  if (!props.imgURL) {
    if (props.imgName) {
      imgSrc += "images/" + props.imgName;
    } else {
      imgSrc += "";
    }
  } else {
    imgSrc=props.imgURL
  }

  let animDuration = 1;
  if(props.position){
    animDuration += props.position*0.5
  }

  let side = props.side;
  if (!(side === "left" || side === "right")) side = "left";

  return (
    <div className="ImageContainer">
      <img src={imgSrc} className="Image" style={{ float: props.side, 'animation-duration': '2s' }} />
      <div className="SummaryContainer">
        <h3 className="ImageHeader"> {props.name} </h3>
        <p className="ImageDescription">{props.body}</p>
      </div>
    </div>
  );
}
