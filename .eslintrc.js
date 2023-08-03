module.exports = {
  ignorePatterns: [".next", ".eslintrc.js", "postcss.config.js"],
  extends: ["productsway/react", "plugin:@next/next/recommended"],
  parserOptions: {
    project: ["./tsconfig.json"],
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
