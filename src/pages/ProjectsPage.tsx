import React, { useEffect } from 'react';
import ActionButton from '../components/ActionButton'
import Project from '../components/Project'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { ProjectGQL, ProjectsProps } from '../types'


const Projects = (props: ProjectsProps) => { 
  const { loading, error, projectsData } = props

  useEffect(() => {
    window.scrollTo(0, 0);  
    return () => {
    }
  }, [])

  return (
    <div className="GenericContainer">
      <div className="togglBannerContainerSuper">
        <a target="_blank" rel="noopener noreferrer" href="https://levelup.gitconnected.com/how-to-show-off-the-hours-you-worked-on-coding-projects-b616b042973d" className="togglBannerContainer">
          <p className='togglBanner'>⏳ = hours tracked on Toggl </p> 
          <FontAwesomeIcon icon={faQuestionCircle}/>
        </a>
      </div>
        {loading 
          ? 
            <FontAwesomeIcon icon={faCircleNotch} className='loadingIcon'/> : 
          error 
          ? 
            <>error loading! please refresh :c</> :
          projectsData && projectsData?.length
          ?
          <div className="ProjectsGrid">
            {projectsData.map((project: ProjectGQL) => {
              return (
                <Project
                  title={project.title.toUpperCase()}
                  description={project.description}
                  gif={project.gif}
                  id={project.id} 
                  key={project.id} 
                  link={project.link}
                  techStack={project.techStack}
                  hours={project.hours}
                  type={project.type}
                  __typename={project.__typename}
                />
              )
            })}
          </div>
          : <>you found a bug! please e-mail me at christianvegaaa@gmail.com with a screenshot and your eth address for a bounty 🤝</>
          } 
      <div className="ActionButtonCluster">
        <ActionButton link="about-me" navigation="left" />
        <ActionButton link="articles" navigation="right" />
      </div>
      <Footer/>
    </div>
  )
}

export default Projects