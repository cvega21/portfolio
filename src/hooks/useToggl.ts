import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { PROJECTS } from '../graphql/queries';

export const useToggl = () => {
  const [projectsData, setProjectsData] = useState({} as any);
  const { loading, error, data } = useQuery(PROJECTS)
  
  useEffect(() => {
    if (data) {
      setProjectsData([...data.getPortfolioProjects].sort((projectA, projectB) => projectA.id - projectB.id));
    }
  }, [data])

  return {loading, error, projectsData}
}