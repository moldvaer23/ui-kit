import type { Config } from 'jest'

const config: Config = {
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	moduleNameMapper: { '^.+\\.(css|less|scss)$': 'babel-jest' },
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: { '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }] },
}

export default config
