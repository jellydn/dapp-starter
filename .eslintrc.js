module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: [
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "."],
      },
    },
  },
  rules: {
    "import/extensions": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.tsx", "**/*.stories.tsx", "mocks/**/*.ts"],
      },
    ],
  },
  overrides: [
    {
      files: ["hardhat.config.js"],
      globals: { task: true },
    },
    {
      files: ["scripts/**"],
      rules: { "no-process-exit": "off" },
    },
    {
      files: ["hardhat.config.js", "scripts/**", "test/**"],
      rules: { "node/no-unpublished-require": "off" },
    },
  ],
};
