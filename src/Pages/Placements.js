import React from "react";

import PlacementContainer from "../Components/PlacementContainer";

/*
Placements
Off campus 
Feed the Hungry -- got it
St. Josephs
St. Francis --> picture :)

Guadalpue Homeless Project -- got it
Good Shepard Shelter
Boys and Girls Club -- got it

Beach Clean ups
*/

/*

Switching to lazy loading
Feed the hungry:
Saint Josephs
Saint Francis

Guadalups Homeless project

*/

const descriptions = {
  francis: `Serve in the Food Pantry where underpaid impoverished people in the ocean park neighborhood receive the chance to “grocery shop” and get essentials. We help guide people through and staff the food that is to be dispersed.`,
  feedTheHungry: `Make lunches for the men of the OPCC shelter  in front of the chapel with Samii, Sean, other Sursums and other members of the LMU community! You can also help deliver the bagged lunches to OPCC (in Santa Monica). `,
  beachCleanup: `Pick up trash at Dockweiler or Playa Del Rey Beach. You’ll want to wear shoes because there might be glass, tar, or other hazards in the sand, and plan on bringing two trash bags: one to carry trash and one for your hand (or gloves)`,
  guadalupeHomeless: `Help prepare dinner and/or share a meal and conversation with men at this temporary shelter for immigrants which has been in downtown LA since 1988. If you enjoy listening to and sharing stories with others, this will be a good placement for you! If you can speak Spanish that’s a helpful communication tool, but not a requirement at all. `,
  goodShepherd: `Care for infants and children or help tutor women at this safe haven for victims of domestic violence that has been open since 1979. Work in classrooms with a variety of ages and serve alongside members of the broader service org community. `,
  josephs: `Serve in the Food Pantry where underpaid impoverished people in the ocean park neighborhood receive the chance to “grocery shop” and get essentials. We help guide people through and staff the food that is to be dispersed.`,
  boysAndGirls: `Tutor kids from age six to eleven in math, reading and writing skills. When kids are done with homework, you can play games with them too. `,
};

export default function Placements() {
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center", width: "100%" , }} id="PlacementHeader">
        Our Off-Campus Service Opportunities
      </h2>
      <p
        style={{
          display: "block",
          textAlign: "center",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          'margin-bottom':'40px',
        }}
      >
        As a member of Sursum Corda, you are expected to perform off-campus
        service at one of our placements. This is a list of the opportunites
        available
      </p>
      <ul
        id="PlacementList"
        style={{ listStyleType: "none", display: "block", padding: "0" }}
      >
        <li>
          <PlacementContainer
            name="St. Francis Food Pantry"
            side="left"
            imgName="FrancisCandid.png"
            alt={"Sursums at Saint Francis Food Pantry"}
            body={descriptions.francis}
            style={{'animation-duration':'0.5s'}}
          />
        </li>
        <li>
          <PlacementContainer
            name="Feed the Hungry"
            side="right"
            imgName="FeedTheHungry.jpg"
            alt={"Feed the hungry event"}
            body={descriptions.feedTheHungry}
          />
        </li>
        <li>
          <PlacementContainer
            name={`St. Josephs Food Pantry`}
            side="left"
            alt={`St. Josephs Logo`}
            imgURL={`https://live.staticflickr.com/8249/8508070090_61bf36275a_b.jpg`}
            body={descriptions.josephs}
          />
        </li>
        <li>
          <PlacementContainer
            name={`Boy's and Girl's Club of Mar Vista Gardens`}
            side="right"
            alt={`Boys and Girls Club Logo`}
            body={descriptions.boysAndGirls}
            imgURL={`https://media.timesfreepress.com/img/photos/2018/12/26/18268641101554008706504061607045346114644042n2705318443_t1070_h9123187ba014f7fa7da7a949ade9082480e1fded.jpg`}
          />
        </li>
        <li>
          <PlacementContainer
            name={`Good Shepherd Shelter`}
            side="left"
            alt={`Good Shepherd Shelter Logo`}
            imgURL={`https://catholiccharitiesla.org/wp-content/uploads/GSS-Logo_New_2020_800px-300x259.jpg`}
            body={descriptions.goodShepherd}
          />
        </li>
        <li>
          <PlacementContainer
            name={`Guadalupe Homeless Proejct (GHP)`}
            side="right"
            alt={`GHP logo`}
            body={descriptions.guadalupeHomeless}
          />
        </li>
        <li>
          <PlacementContainer
            name="Beach Cleanup"
            side="left"
            alt={"Beach photo with Sursums"}
            body={descriptions.beachCleanup}
            imgURL={`https://live.staticflickr.com/3781/10940171285_3c3793ac02.jpg" alt="beach trash"><a href="https://www.flickr.com/photos/51272126@N00/10940171285"`}
          />
        </li>
      </ul>
    </React.Fragment>
  );
}
