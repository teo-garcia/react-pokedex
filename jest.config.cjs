module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '.+\\.(png|jpg|svg)$': '<rootDir>/src/mocks/fileMock.ts',
  },
  testPathIgnorePatterns: ['<rootDir>/e2e'],
}
