import { FunctionComponent } from 'react';
import { faLandmark, faCommentsDollar, faBuilding } from '@fortawesome/free-solid-svg-icons';
import FlipCard from './FlipCard';
import '../styles/IndustrySection.scss'

const IndustryExperience: FunctionComponent = () => {
  return (
    <div className="IndustrySection">
      <h1>Industry Experience</h1>
      <div className="IndustryGrid">
        <FlipCard icon={faCommentsDollar} title={'Payments'} description={'Real-Time Fraud Prevention'}/>
        <FlipCard icon={faLandmark} title={'Investment Banking'} description={'Consumer and Retail'}/>
        <FlipCard icon={faBuilding} title={'Real Estate'} description={'Institutional Asset Management'}/>
      </div>  
    </div>
    )
}

export default IndustryExperience
