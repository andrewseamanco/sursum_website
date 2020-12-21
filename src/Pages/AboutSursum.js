import React from 'react'
import './AboutSursum.css'

import francoisImage from './../images/Francois.jpg'


export default function AboutSursum() {
  return (
    <div className="aboutDiv">
      <h2 className="sectionHeader">About Sursum Corda</h2>
      <div className="aboutContent">
        <img className="giraffeImage" src={francoisImage}alt='' />
        <div className="aboutText">
          <h3 className={`sectionText sectionSubheader`}>What's is Sursum Corda?</h3>
          <p className="sectionText"> Founded in 1992, Sursum Corda is one of Loyola Marymout University's four
          all-gender service organizations.</p>
          <h3 className={`sectionText sectionSubheader`}>What does being a member of Sursum Corda entail?</h3>
          <p className="sectionText">As an organization, Sursum Corda is
          committed to reflecting on, unpacking, and challenging food systems on-campus,
          locally, and globally in line with our mission of food justice. Being that Sursum
          Corda translates in Latin to "lift up your heart," we commit to the practice
          of "heart lifting" as we act compassionately in and out of service experiences. Dedicated
          primarily to off-campus service, Sursums are committed to establishing
          meaningful bonds with the greater Los Angeles community as well as with
          each other. </p>
          <h3 className={`sectionText sectionSubheader`}>Why so many giraffes?</h3>
          <p className="sectionText">Giraffes are Sursum Corda's official mascot.  To be specific </p>
        </div>
      </div>
    </div>
  )
}
