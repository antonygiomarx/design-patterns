module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "off",
    "import/prefer-default-export": "off",
    "max-classes-per-file": "off",
    "no-unused-vars": "off",
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
  },
};
