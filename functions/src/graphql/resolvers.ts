const resolvers = {
  Query: {
    portfolioProjects: async (_: any, __: any, { dataSources }: any) => {
      const projectsJSON = await dataSources.RealtimeDB.portfolioProjects();
      return Object.keys(projectsJSON).map(project => projectsJSON[project])
    },
  }
}

 export { resolvers }