module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
            'jest-transform-stub'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/__mocks__/styleMock.ts'
    },
    coverageReporters: ['text', 'html'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
};
