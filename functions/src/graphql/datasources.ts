export const mocks = {
  Query: () => ({
    getProjectsData: [...new Array(6)],
  }),
  Project: () => ({
    title: () => 'Fake Project',
    description: () => 'Very good project',
    type: () => 'Freelance',
    hours: () => 5,
    imgSrc: () => '../../src/assets/adamint.gif',
    techStack: () => [{
      name: 'javascript', 
      imgSrc: '../../src/assets/javascript.png'
    }]
  }),
}