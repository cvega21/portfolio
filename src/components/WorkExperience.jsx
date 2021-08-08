import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faCommentsDollar, faBuilding } from '@fortawesome/free-solid-svg-icons';
import '../styles/IndustrySection.scss'

const WorkExperience = () => {
  return (
    <div className="WorkSection">
      <h1>Work Experience</h1>
      <div className="IndustryGrid">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <FontAwesomeIcon icon={faLandmark}/>
              <h2>Visa</h2>
            </div>
            <div class="flip-card-back">
              <h1>Business Role</h1>
              <h2>Consumer and Retail M&A</h2>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <FontAwesomeIcon icon={faCommentsDollar}/>
              <h2>Nomura</h2>
            </div>
            <div class="flip-card-back">
              <h1>Technology Role</h1>
              <h2>Real-Time Fraud Prevention</h2>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <FontAwesomeIcon icon={faBuilding}/>
              <h2>TRS</h2>
            </div>
            <div class="flip-card-back">
              <h1>Business Role</h1>
              <h2>Institutional Asset Management</h2>
            </div>
          </div>
        </div>
      </div>  
    </div>
    )
}

export default WorkExperience
