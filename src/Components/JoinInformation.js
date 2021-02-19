import React from 'react'
import classNames from 'classnames'
import sursumShield from './../images/SursumShield.png'
import happySursums from './../images/HappySursums.jpg'
import recruitmentTable from './../images/recruitmentTable.jpg'
import croppedShield from './../images/croppedForestShield.jpg'
import './JoinInformation.css'

 export default function JoinInformation() {
   const groupImageClasses = classNames('image','groupImage');
   const recruitmentImageClasses = classNames('image','recruitmentImage');
   const croppedShieldImageClasses = classNames('image','croppedShieldImage');

   return (
     <div className="joinDiv">
      <div className="JoinTitle">
        <p className="title-1">Sursum Corda Recruitment</p>
        <hr />
      </div>
        <div className="join-segment">
          <img src={happySursums} alt="sursum sheild decorated for a little" className={groupImageClasses}/>
          <div className="join-text">
            <p className="joinTitle littles"> Why are members the incoming Sursum class called Littles? </p>
            <p>First-years, second-years, and third-years can apply to Sursum, but members of the incoming class are always called littles.  We call the incoming class littles since all incoming Sursums will be paired with bigs.  Sursum bigs have been doing service and advocacy in Sursum for at least one year.
            Bigs share their passion for service and Sursum to provide their littles with advice, mentorship, and friendship.  Bigs and littles form Sursum families, and even though everyone in Sursum is family, littles and bigs share a special Sursum bond.</p>
          </div>
        </div>

          <div className="join-segment" >
            <img src={recruitmentTable} className={recruitmentImageClasses}/>
            <div className="join-text">
              <p className="joinTitle key-party"> Key Party </p>
              <p>The first event that incoming Sursums will attend as an offical little is the key party.  Before key party, littles attend service placements for the first time with eboard members.  After serving, the group congregates at the beach for a bonfire to share the excitement of serving at official
              Sursum placements and to meet other members of the little class.  After the bonfire, the new littles and bigs move to a house owned by a member of Sursum, where the party will continue and they will meet the rest of the members of the org.</p>
            </div>
          </div>

          <div className="join-segment" >
            <img src={croppedShield} className={croppedShieldImageClasses}/>
            <div className="join-text">
              <p className="joinTitle little-retreat"> Littles Retreat </p>
              <p>Another special event the incoming class of Sursum Corda will attend is the Littles Retreat.  During the retreat littles will spend quality time with the rest of their incoming class and learn in-depth about Sursum Corda.  The retreat will typically go late into the night and features some special
              Super Secret Sursum traditions. </p>
            </div>
          </div>
        </div>
  )
}
