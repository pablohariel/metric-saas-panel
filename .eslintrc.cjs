/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "prettier"
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".vue"]
    },
    "import/resolver": {
      typescript: {}
    }
  },
  env: {
    "vue/setup-compiler-macros": true
  }
};
