import { gql } from '@apollo/client';

export const PROJECTS = gql`
  query Query {
    getPortfolioProjects {
      id
      description
      gif
      hours
      link
      title
      type
      techStack {
        name
      }
    }
  }
`