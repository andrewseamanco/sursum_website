import React from 'react'
import { FaInstagram, FaFacebookSquare, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className = "footerDiv">
      <p>Contact Sursum!</p>
      <ul>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaEnvelope />
        </li>
      </ul>
    </div>
  )
}
