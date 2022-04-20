const resolvers = {
  Query: {
    getProjectsData: async (_: any, __: any, { dataSources }: any) => {
      const projectsJSON = await dataSources.RealtimeDB.getProjectsData();
      return Object.keys(projectsJSON).map(project => projectsJSON[project])
    },
  }
}

 export { resolvers }