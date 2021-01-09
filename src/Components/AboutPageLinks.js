import React from 'react'
import './AboutPageLinks.css'
import beachPhoto from '../images/beachPhoto.jpg'
import broomball from '../images/broomball.jpg'
import forestShield from '../images/forestShield.jpg'
import heartHands from '../images/heartHands.jpg'

export default function AboutPageLinks() {
  return (
    <div className="links">
      <div className="container">
        <img src={forestShield} />
        <p className="link">About Us</p>
        <a href="/"> <button className="btn">Learn More</button> </a>
      </div>
      <div className="container">
        <img src={broomball} />
        <p className="link">Sursum Events</p>
        <a href="/events"> <button className="btn">Learn More</button> </a>
      </div>
      <div className="container">
        <img src={beachPhoto} />
        <p className="link">Join Sursum</p>
        <a href="join"> <button className="btn">Learn More</button> </a>
      </div>
      <div className="container">
        <img src={heartHands} />
        <p className="link">Contact Us</p>
        <a href="contact"> <button className="btn">Learn More</button> </a>
      </div>
    </div>
  )
}
