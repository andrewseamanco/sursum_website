import React from 'react'
import './Placements.css'
import  BoysAndGirlsClub  from './../images/placements/BoysAndGirlsClub.png'
import  FeedTheHungry  from './../images/placements/Chapel.jpg'
import  PBJ  from './../images/placements/Eldies.png'
import  SaintFrancis  from './../images/placements/SaintFrancis.jpeg'
import  SPY  from './../images/placements/SPY.jpeg'
import  StJoseph  from './../images/placements/SaintJosephsCenter.jpg'






 export default function Placements() {
   return (
     <div className="placementInformation">
      <p className="title-1">Our Partner Organizations</p>
      <hr />
      <div className="placements">
        <div className="twos">
          <a href="https://www.smbgc.org/locations/mvg/" className="placementLink">
            <img className="placementImage" src={BoysAndGirlsClub} />
          </a>
          <a href="https://mission.lmu.edu/ministry/servicejustice/feedthehungry/" className="placementLink">
            <img className="placementImage" src={FeedTheHungry} />
          </a>
        </div>
        <div className="twos">
            <a href="https://www.eldies.org/pbjt" className="placementLink">
              <img className="placementImage" src={PBJ} />
            </a>
            <a href="https://www.stfranciscenterla.org/" className="placementLink">
              <img className="placementImage" src={SaintFrancis} />
            </a>
        </div>
        <div className="twos">
          <a href="http://www.safeplaceforyouth.org/" className="placementLink">
            <img className="placementImage" src={SPY} />
          </a>
          <a href="https://stjosephctr.org/" className="placementLink">
            <img className="placementImage" src={StJoseph} />
          </a>
        </div>
      </div>
     </div>
   )
}
