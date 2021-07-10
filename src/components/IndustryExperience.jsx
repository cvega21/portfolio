import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faCommentsDollar, faBuilding } from '@fortawesome/free-solid-svg-icons';
import '../styles/IndustrySection.scss'

const IndustryExperience = () => {
  return (
    <div className="IndustrySection">
      <h1>Industry Experience</h1>
      <div className="IndustryGrid">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <FontAwesomeIcon icon={faLandmark}/>
              <h2>Investment Banking</h2>
            </div>
            <div class="flip-card-back">
              {/* <h1>Business Role</h1> */}
              <h1>Consumer and Retail M&A</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <FontAwesomeIcon icon={faCommentsDollar}/>
              <h2>Payments</h2>
            </div>
            <div class="flip-card-back">
              {/* <h1>Technology Role</h1> */}
              <h2>Real-Time Fraud Prevention</h2>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <FontAwesomeIcon icon={faBuilding}/>
              <h2>Real Estate</h2>
            </div>
            <div class="flip-card-back">
              {/* <h1>Business Role</h1> */}
              <h2>Institutional Asset Management</h2>
            </div>
          </div>
        </div>
      </div>  
    </div>
    )
}

export default IndustryExperience
