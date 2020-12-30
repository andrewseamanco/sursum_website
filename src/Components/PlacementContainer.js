import React from "react";
import "./PlacementContainer.css";

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

  let side = props.side;
  if (!(side === "left" || side === "right")) side = "left";

  return (
    <div className="ImageContainer" style={{...props.style,}}>
      {props.imgURL || props.imgName ? <img alt={props.alt} src={imgSrc} className="Image" style={{ float: props.side}}/> : <div className='Image' style={{float:props.side}}/>}
      <div className="SummaryContainer">
        <h3 className="ImageHeader"> {props.name} </h3>
        <p className="ImageDescription">{props.body}</p>
      </div>
    </div>
  );
}
