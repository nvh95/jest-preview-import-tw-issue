/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest")
const { configureNextJestPreview } = require("jest-preview")
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})


// Add any custom config to be passed to Jest
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = configureNextJestPreview(
  createJestConfig({
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    transform: {
      "^.+\\.css$": "jest-preview/transforms/css",
      "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
        "jest-preview/transforms/file",
    },
    testEnvironment: "jest-environment-jsdom"
  })
)
