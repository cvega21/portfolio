const { gql } = require("apollo-server-express");

export const typeDefs = gql`
  type Project {
    id: Int!
    description: String!
    gif: String!
    hours: Float
    link: String!
    techStack: [TechTool!]!
    title: String!
    togglName: String
    type: String!
  }

  type TechTool {
    name: String!
    id: Int!
  }

  type Query {
    getPortfolioProjects: [Project!]!
    getTechTools: [TechTool!]!
  }
`;