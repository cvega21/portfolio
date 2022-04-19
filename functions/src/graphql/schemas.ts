const { gql } = require("apollo-server-express");

export const typeDefs = gql`
  type Project {
    title: String!
    description: String!
    type: String!
    hours: Int
    imgSrc: String!
    techStack: [TechTool!]!
  }

  type TechTool {
    name: String!
    imgSrc: String!
  }

  type Query {
    getProjectsData: [Project!]!
  }
`;

