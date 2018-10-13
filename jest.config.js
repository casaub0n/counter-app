module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ["src/**.ts", "src/**.tsx"],
  testMatch: [
    "**/__tests__/**.test.ts",
    "**/__tests__/**.test.tsx",
    "**/__tests__/**.test.js"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      babelConfig: false
    }
  }
}