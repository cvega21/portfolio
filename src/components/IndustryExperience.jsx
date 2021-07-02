import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faCommentsDollar, faBuilding } from '@fortawesome/free-solid-svg-icons';
import '../styles/IndustrySection.scss'

const IndustryExperience = () => {
  return (
    <div className="IndustrySection">
      <h1>Industry Experience</h1>
      <div className="IndustryGrid">
        <div>
          <FontAwesomeIcon icon={faLandmark}/>
          <h2>Investment Banking</h2>
        </div>
        <div>
          <FontAwesomeIcon icon={faCommentsDollar}/>
          <h2>Payments</h2>
        </div>
        <div>
          <FontAwesomeIcon icon={faBuilding}/>
          <h2>Real Estate</h2>
        </div>
      </div>
    </div>
    )
}

export default IndustryExperience
