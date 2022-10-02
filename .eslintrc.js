module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
    "jest/globals": true,
    "cypress/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "react-app",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  plugins: ["react", "react-hooks", "jest", "cypress", "@typescript-eslint"],
  rules: {
    "no-debugger": "off",
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the React version
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        // Convention we've chosen is to prefix interfaces with I
        "@typescript-eslint/interface-name-prefix": "off",
        // Empty functions are sometimes needed to initialise members required to satisfy interfaces
        "@typescript-eslint/no-empty-function": "off",
        // Avoid adding unnecessary noise to the code by requiring ': void' at the end of non-returning functions
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        // Sometimes ts-comments are needed in tests
        "@typescript-eslint/ban-ts-comment": "off",
        // Sometimes var is useful in tests
        "@typescript-eslint/no-var-requires": "off",
        // Sometimes any is necessary for setting up tests
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
}
