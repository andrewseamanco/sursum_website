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
        <img src={forestShield} alt="Sursum shield in the forest"/>
        <p className="link">About Us</p>
        <a href="/"> <button className="btn">Learn More</button> </a>
      </div>
      <div className="container">
        <img src={broomball} alt="Two Sursums smiling after a broomball game"/>
        <p className="link">Sursum Events</p>
        <a href="/events"> <button className="btn">Learn More</button> </a>
      </div>
      <div className="container">
        <img src={beachPhoto} alt="A group of Sursums on the beach"/>
        <p className="link">Join Sursum</p>
        <a href="join"> <button className="btn">Learn More</button> </a>
      </div>
      <div className="container">
        <img src={heartHands} alt="Three Sursums holding hands in the shape of a heart"/>
        <p className="link">Contact Us</p>
        <a href="contact"> <button className="btn">Learn More</button> </a>
      </div>
    </div>
  )
}
