import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },
  {
    // reconhece os globals do Jest nos testes
    files: ["tests/**/*.js", "**/*.test.js"],
    env: { jest: true },
    languageOptions: {
      globals: { ...globals.jest }
    }
  }
]);