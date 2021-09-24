import React from 'react'
import president from './../images/eboard/AvaTotah.jpg'
import vicePresident from './../images/eboard/IsabelaCastroPeñate.JPG'
import secretary from './../images/eboard/AmillianaCox.JPG'
import service from './../images/eboard/HalleVogelpohl.jpg'
import missionAndSocialJustice from './../images/eboard/ConnorOrdonez.JPG'
import spirituality from './../images/eboard/SanaiBrooks.JPG'
import communityEngagement from './../images/eboard/AndrewSeaman.jpg'
import finance from './../images/eboard/IanGreen.jpg'


import './EboardInformation.css'

export default function EboardInformation() {
  return (
    <div>
      <div className="eboardMembers">
        <p className="title-1">2020 - 2021 Eboard</p>
        <div className="rowsOfFour">
          <div className="rowsOfTwo">
            <div className="eboardProfile">
              <img className="eboardPicture" src={president} />
              <p className="eboardName"> Ava Totah </p>
              <p className="eboardPosition"> Presidential person </p>
            </div>
            <div className="eboardProfile">
              <img className="eboardPicture" src={vicePresident} />
              <p className="eboardName"> Isabela Castro Peñate </p>
              <p className="eboardPosition"> Vice President </p>
            </div>
          </div>
          <div className="rowsOfTwo">
            <div className="eboardProfile">
              <img className="eboardPicture" src={secretary} />
              <p className="eboardName"> Amilliana Cox </p>
              <p className="eboardPosition"> Secretary </p>
            </div>
            <div className="eboardProfile">
              <img className="eboardPicture" src={service} />
              <p className="eboardName"> Halle Vogelpohl </p>
              <p className="eboardPosition"> Vice President of Service </p>
            </div>
          </div>
        </div>
        <div className="rowsOfFour">
          <div className="rowsOfTwo">
            <div className="eboardProfile">
              <img className="eboardPicture" src={missionAndSocialJustice} />
              <p className="eboardName"> Connor Ordonez </p>
              <p className="eboardPosition"> Vice President of Mission and Social Justice </p>
            </div>
            <div className="eboardProfile">
              <img className="eboardPicture" src={spirituality} />
              <p className="eboardName"> Sanai Brooks </p>
              <p className="eboardPosition"> Vice President of Spirituality </p>
            </div>
          </div>
          <div className="rowsOfTwo">
            <div className="eboardProfile">
              <img className="eboardPicture" src={communityEngagement} />
              <p className="eboardName"> Andrew Seaman </p>
              <p className="eboardPosition"> Vice President of Community Engagement </p>
            </div>
            <div className="eboardProfile">
              <img className="eboardPicture" src={finance} />
              <p className="eboardName"> Ian Green </p>
              <p className="eboardPosition"> Vice President of Finance </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
