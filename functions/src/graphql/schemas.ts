const { gql } = require("apollo-server-express");

export const typeDefs = gql`
  type Project {
    title: String!
    togglName: String!
    hours: Float
    # type: String!
    # imgSrc: String!
    # techStack: [TechTool!]!
  }

  # type TechTool {
  #   # name: String!
  #   # imgSrc: String!
  # }

  type Query {
    portfolioProjects: [Project!]!
  }
`;