/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "true",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "plugin:prettier/recommended",
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "react-refresh"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "on",
    "@typescript-eslint/explicit-function-return-type": "on",
    "@typescript-eslint/explicit-module-boundary-types": "on",
    "@typescript-eslint/no-explicit-any": "on",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
