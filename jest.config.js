module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_modules/", "/android", "ios"],
  setupFilesAfterEnv: [
    "jest-styled-components",
    "@testing-library/jest-native/extend-expect",
  ],
};
