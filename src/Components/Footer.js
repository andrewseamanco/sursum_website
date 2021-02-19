import React from 'react';
import { FaDesktop, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="column">
        <p className="title">Learn More</p>
        <ul className="footerList">
          <li className="footerLi"><a className="footerLink" href="https://sursumcordalmu.weebly.com/"><FaDesktop className="icon"/>  Old Sursum Website</a></li>
          <li className="footerLi"><a className="footerLink" href="https://lmu.campuslabs.com/engage/organization/sursum-corda"> <FaDesktop className="icon"/>  LMU Sursum Corda Organization Page</a></li>
          <li className="footerLi"><a className="footerLink" href="https://www.lmu.edu/"><FaDesktop className="icon"/>  Loyola Marymount University</a></li>
        </ul>
      </div>
      <div className="column">
        <p className="title">Contact Us</p>
        <ul className="footerList">
          <li className="footerLi"><a className="footerLink" href="https://www.facebook.com/sursumcordarecruitmentlmu2020"><FaFacebook className="icon"/> @sursumcordarecruitmentlmu2020</a></li>
          <li className="footerLi"><a className="footerLink" href="https://www.instagram.com/sursumcordalmu/"><FaInstagram className="icon"/> @sursumcordalmu </a></li>
          <li className="footerLi"><a className="footerLink" href="mailto:sursumcorda@lmu.edu"><FaEnvelope className="icon"/> sursumcorda@lmu.edu </a></li>
        </ul>
      </div>
    </div>
  )
}
