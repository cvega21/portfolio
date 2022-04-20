// const { RESTDataSource } = require('apollo-datasource-rest');
import { RESTDataSource } from 'apollo-datasource-rest'

export class RealtimeDB extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://portfolio-75ffa-default-rtdb.firebaseio.com/'
  }

  portfolioProjects() {
    return this.get('projectsGraphQL.json');
  }
  
  techTools() {
    return this.get(`techTools.json`);
  }

  getTechTool(toolName: string) {
    return this.get(`techTools/${toolName}.json`);
  }
}