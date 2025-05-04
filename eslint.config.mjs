import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules, // включаем Prettier-правила
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    settings: {},
  },
]);
