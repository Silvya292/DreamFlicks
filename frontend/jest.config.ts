/* eslint-disable */
export default {
  displayName: 'frontend',
  preset: '../jest.preset.js',
  coverageDirectory: '../coverage/frontend',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
