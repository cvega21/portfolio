"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql } = require("apollo-server-express");
exports.typeDefs = gql `
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
//# sourceMappingURL=schemas.js.map