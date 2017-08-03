module.exports = {
  env: {
    browser: true,
    meteor: true,
    node: true,
    es6: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: [0, 2],
    "linebreak-style": [2, "unix"],
    //'quotes': [2, 'single'],
    semi: [2, "never"],
    "no-console": 0,
    "array-bracket-spacing": [2, "never"],
    camelcase: [2, { properties: "always" }],
    "keyword-spacing": [2],
    "no-trailing-spaces": [2],
    "no-extra-parens": 0,
    "react/jsx-uses-vars": 1
  }
}
