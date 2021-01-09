import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="column">
        <p>Address</p>
        <ul>
          <li>1 Loyola Marymount Drive, Los Angeles, CA 90045</li>
        </ul>
      </div>
      <div className="column">
        <p>Learn More</p>
        <ul>
          <li><a href="https://sursumcordalmu.weebly.com/">Old Sursum Website</a></li>
          <li><a href="https://lmu.campuslabs.com/engage/organization/sursum-corda">LMU Sursum Corda Organization Page</a></li>
          <li><a href="https://www.lmu.edu/">Loyola Marymount University</a></li>
        </ul>
      </div>
      <div className="column">
        <p>Contact</p>
        <ul>
          <li></li>
          <li>Hello</li>
        </ul>
      </div>
    </div>
  )
}
