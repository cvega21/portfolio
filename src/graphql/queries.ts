import { gql } from '@apollo/client';

export const PROJECTS = gql`
  query getProjectsData {
    portfolioProjects {
      title
      togglName
      hours
    }
  }
`