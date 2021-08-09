import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';


interface FlipCardProps {
  icon: IconDefinition;
  title: string;
  description: string; 
}

const FlipCard: FunctionComponent<FlipCardProps> = ({icon, title, description}: FlipCardProps) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FontAwesomeIcon icon={icon}/>
          <h2>{title}</h2>
        </div>
        <div className="flip-card-back">
          <h2>{description}</h2>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
