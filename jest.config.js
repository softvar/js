module.exports = {
  verbose: true,
  notify: true,
  testEnvironment: 'node',
  cacheDirectory: '.jest-cache',
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  // roots: ["<rootDir>/src"],
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'js', 'json'],
  testRegex: '(/test/.*|(\\.|/)(spec))\\.ts$',
  collectCoverage: true,
  collectCoverageFrom: ['*.js', '!*.config.js', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/template/'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  displayName: {
    name: 'JS',
    color: 'pink'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/coverage/', '/template/']
};
