import React from 'react'
import sursumLogo from './../images/sursumLogo.png'
import './AboutSursum.css'

 export default function AboutSursum() {
   return (
     <div className="aboutDiv">
      <img className="sursumLogo" src={sursumLogo} alt="sursum design" />
      <div className="aboutInformation">
        <p className="title-1">About Us</p>
        <hr />
        <p className="title-2">Who We Are</p>
        <p className="info-paragraph">Sursum Corda is an all-gender organization dedicated to food injustice advocacy and sevice in the Loyola Marymount and surrounding Los Angeles community.</p>
        <p className="title-2">Our Creed</p>
        <div>
          <ul className="creed">
            <li className="firstLine">As a member of Sursum Corda, I lift my heart: </li>
            <li className="lineOfCreed">To serve with intention and presence, </li>
            <li className="lineOfCreed">To work towards our mission of social justice, </li>
            <li className="lineOfCreed">To seek community and understanding, </li>
            <li className="lineOfCreed">To grow in experience and passion, </li>
            <li className="lineOfCreed">And to stand with and for all people. </li>
          </ul>
        </div>
      </div>
    </div>
   );
 }
