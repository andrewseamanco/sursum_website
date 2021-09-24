import React from "react";
import "./Media.css";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Media() {
  return (
    <div className="mediaDiv">
      <p className="title-1">
        <u>Keep the Conversation Going!</u>
      </p>
      <ul>
        <li className="mediaLi">
          <a
            href="https://www.instagram.com/sursumcordalmu/"
            className="mediaLink"
          >
            <FaInstagram /> @sursumcordalmu{" "}
          </a>
        </li>
        <li className="mediaLi">
          <a
            href="https://www.instagram.com/sursumcordalmu/"
            className="mediaLink"
          >
            <FaEnvelope /> @sursumcordalmu{" "}
          </a>
        </li>
        <li className="mediaLi">
          <a
            href="https://www.facebook.com/sursumcordarecruitmentlmu2021"
            className="mediaLink"
          >
            <FaFacebook /> @sursumcordarecruitmentlmu2021
          </a>
        </li>
      </ul>
    </div>
  );
}
