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

export default function Placements() {
  //Queue that will sequentially load elements
  //  in this case, the placements for a nice animation
  const PlacementComponentList = (function () {
    let i = 1;
    return PlacementList.map((place) => {
      return (
        <li key={i++}>
          <PlacementContainer
            name={place.name}
            body={place.description}
            alt={place.alt}
            imgName={place?.imgName}
            imgURL={place?.imgURL}
            side={i % 2 === 0 ? "left" : "right"}
            style={{
              animationDuration: `${0.3 + i/5}s`,
            }}
          />
        </li>
      );
    });
  })();

  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center", width: "100%" }} id="PlacementHeader">
        Our Off-Campus Service Opportunities
      </h2>
      <p
        style={{
          display: "block",
          textAlign: "center",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          "marginBottom": "40px",
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
        {PlacementComponentList}
      </ul>
    </React.Fragment>
  );
}

// const descriptions = {};
const PlacementList = [
  {
    name: "St. Francis Food Pantry",
    description: `Serve in the Food Pantry where underpaid impoverished people in the ocean park neighborhood receive the chance to “grocery shop” and get essentials. We help guide people through and staff the food that is to be dispersed.`,
    imgName: "FrancisCandid.png",
    alt: "Sursums at Saint Francis Food Pantry",
  },
  {
    name: "St. Josephs Food Pantry",
    description: `Serve in the Food Pantry where underpaid impoverished people in the ocean park neighborhood receive the chance to “grocery shop” and get essentials. We help guide people through and staff the food that is to be dispersed.`,
    alt: `St. Josephs Logo`,
    imgURL: `https://live.staticflickr.com/8249/8508070090_61bf36275a_b.jpg`,
  },
  {
    name: "Feed the Hungry",
    description: `Make lunches for the men of the OPCC shelter  in front of the chapel with Samii, Sean, other Sursums and other members of the LMU community! You can also help deliver the bagged lunches to OPCC (in Santa Monica). `,
    imgName: "FeedTheHungry.jpg",
    alt: "Feed the hungry event",
  },
  {
    name: "Boys and Girls Club",
    description: `Tutor kids from age six to eleven in math, reading and writing skills. When kids are done with homework, you can play games with them too. `,
    imgName:'BoysAndGirlsClub.jpeg',
    // imgURL: `https://media.timesfreepress.com/img/photos/2018/12/26/18268641101554008706504061607045346114644042n2705318443_t1070_h9123187ba014f7fa7da7a949ade9082480e1fded.jpg`,
    alt: "Boys and Girls Club logo",
  },
  {
    name: "Good Shepherd Shelter",
    description: `Care for infants and children or help tutor women at this safe haven for victims of domestic violence that has been open since 1979. Work in classrooms with a variety of ages and serve alongside members of the broader service org community. `,
    imgURL: `https://catholiccharitiesla.org/wp-content/uploads/GSS-Logo_New_2020_800px-300x259.jpg`,
    alt: "Good Shepherd Shelter logo",
  },
  {
    name: "Guadalupe Homeless Project",
    description: `Help prepare dinner and/or share a meal and conversation with men at this temporary shelter for immigrants which has been in downtown LA since 1988. If you enjoy listening to and sharing stories with others, this will be a good placement for you! If you can speak Spanish that’s a helpful communication tool, but not a requirement at all. `,
  },
  {
    name: "Beach Cleanup",
    description: `Pick up trash at Dockweiler or Playa Del Rey Beach. You’ll want to wear shoes because there might be glass, tar, or other hazards in the sand, and plan on bringing two trash bags: one to carry trash and one for your hand (or gloves)`,
    imgURL: `https://live.staticflickr.com/3781/10940171285_3c3793ac02.jpg"` /*alt="beach trash"><a href="https://www.flickr.com/photos/51272126@N00/10940171285"`*/,
    alt: "Trash on a beach",
  },
];
