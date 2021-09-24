import React from "react";
import "./RecruitmentSteps.css";
import party from "../images/HandsInAir.png";
import {
  FaCheckCircle,
  FaThumbsUp,
  FaBatteryQuarter,
  FaBatteryHalf,
  FaBatteryThreeQuarters,
  FaBatteryFull,
} from "react-icons/fa";

export default function RecruitmentSteps() {
  return (
    <div className="recruitment-step-div">
      <p className="title-1">Requirements to join Sursum Corda</p>
      <hr />
      <div className="requirementList">
        <div className="requirementLists">
          <ul className="rList">
            <li>
              You must be a student at Loyola Marymount University{" "}
              <FaCheckCircle />
            </li>
            <li>
              You must be a first-year, second-year or third year{" "}
              <FaCheckCircle />
            </li>
            <li>
              You must be willing to make a commitment to service during your
              college experience <FaCheckCircle />
            </li>
            <li>
              You must have an interest in advocacy and social justice{" "}
              <FaCheckCircle />
            </li>
          </ul>
          <p>
            <strong>
              <i>
                Once you know you are interested in joining Sursum Corda, here
                is how Sursum Corda can recruit you!
              </i>
            </strong>
          </p>
          <ul className="rList">
            <li>
              Attend All Org Night to learn about all the service organizations
              LMU has to offer! <FaBatteryQuarter />
            </li>
            <li>
              Attend Sursum events during recruitment week <FaBatteryHalf />
            </li>
            <li>
              Fill out a Service Organization Community Application{" "}
              <FaBatteryThreeQuarters />
            </li>
            <li>
              Sign up for an interview time after you have submitted your
              application <FaBatteryFull />
            </li>
            <li>
              You are now all set to be recruited <FaThumbsUp />
            </li>
          </ul>
        </div>
        <img alt="hands in the air" className="handsInTheAir" src={party} />
      </div>
    </div>
  );
}
