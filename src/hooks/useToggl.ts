import { useState, useEffect } from 'react'
import firebase from 'firebase'
import { DateTime, Interval } from 'luxon';

export const useToggl = (database: firebase.database.Database) => {
  const [projectsData, setProjectsData] = useState({projects: {placeholder: ''}, projectsMetadata: {placeholder: ''}});

  useEffect(() => {
    /**
     * getProjects()
     * fetches entire database and set cache expiration date
     * only 2 keys on firebase root are {projects} and {projectsMetadata}
     */

    const getProjects = async () => {
      let firebaseReq = await database.ref(`/`).once('value');
      let firebaseJSON = await firebaseReq.val();
      console.log('calling firebase...')
      
      setProjectsData(firebaseJSON);
      setLocalCache(firebaseJSON);
    }
    
    const setLocalCache = ({ projects, projectsMetadata }: any) => {
      let dtToday = DateTime.now().toFormat('MM-dd-yyyy T');
      localStorage.setItem('cacheLastUpdated', dtToday);
      localStorage.setItem('projects', JSON.stringify(projects));
      localStorage.setItem('projectsMetadata', JSON.stringify(projectsMetadata));
    }

    const cacheIsExpired = (cacheLastUpdated: string): Boolean => {
      const dtCacheLastUpdated = DateTime.fromFormat(cacheLastUpdated, 'MM-dd-yyyy T');
      const elapsedSinceLastUpdate = Interval.fromDateTimes(dtCacheLastUpdated, DateTime.now()).toDuration();

      return elapsedSinceLastUpdate.days > 1
    }

    let cachedProjects = localStorage.getItem('projects');
    let cachedProjectsMetadata = localStorage.getItem('projectsMetadata');
    let cacheLastUpdated = localStorage.getItem('cacheLastUpdated');
    
    if (!cachedProjects || !cachedProjectsMetadata ) {
      console.log('cache not found')
      getProjects();
    } else if (cacheLastUpdated && cacheIsExpired(cacheLastUpdated)) {
      console.log('cache was stale')
      getProjects();
    } 
    else {
      console.log('cache hit!')
      setProjectsData({'projects': JSON.parse(cachedProjects), 'projectsMetadata': JSON.parse(cachedProjectsMetadata)})
    }
  }, [database])

  return projectsData
}