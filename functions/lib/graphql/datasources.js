"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mocks = void 0;
exports.mocks = {
    Query: () => ({
        getProjectsData: [...new Array(6)],
    }),
    Project: () => ({
        title: () => 'Fake Project',
        description: () => 'Very good project',
        type: () => 'Freelance',
        hours: () => 69,
        imgSrc: () => '../../src/assets/adamint.gif',
        techStack: () => [{
                name: 'javascript',
                imgSrc: '../../src/assets/javascript.png'
            }]
    }),
};
//# sourceMappingURL=datasources.js.map