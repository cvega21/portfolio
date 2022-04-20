const resolvers = {
  Query: {
    getPortfolioProjects: async (_: any, __: any, { dataSources }: any) => {
      const projectsJSON = await dataSources.RealtimeDB.portfolioProjects();
      return Object.keys(projectsJSON).map(project => projectsJSON[project])
    },
    getTechTools: async (_: any, __: any, { dataSources }: any) => {
      const toolsJSON = await dataSources.RealtimeDB.techTools();
      return Object.keys(toolsJSON).map(tool => toolsJSON[tool])
    },
  },
  Project: {
    techStack: async ({ techStack }: { techStack: Object }, __: any, { dataSources }: any) => {
      const techStackArr = Object.keys(techStack);
      const techStackHydrated: Object[] = await Promise.all(
        techStackArr.map(async tool => await dataSources.RealtimeDB.getTechTool(tool)))
      return techStackHydrated
    },
  }
}

 export { resolvers }