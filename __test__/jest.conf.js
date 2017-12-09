const path = require('path')

module.exports = {
  verbose: true,
  globals: {
    NODE_ENV: 'test',
  },
  testEnvironment: "jsdom",
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    '^.+\\.(css)$':"<rootDir>/node_modules/jest-css-modules"
  },
  setupFiles: ["jest-localstorage-mock"]
};
