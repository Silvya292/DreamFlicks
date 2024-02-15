/* eslint-disable */
export default {
  displayName: 'frontend',
  preset: '../jest.preset.js',
  coverageDirectory: '../coverage/frontend',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
