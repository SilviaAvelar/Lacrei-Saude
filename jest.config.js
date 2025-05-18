// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    },
    moduleDirectories: ['node_modules', '<rootDir>/'],
};

module.exports = createJestConfig(customJestConfig);