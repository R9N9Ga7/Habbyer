import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-config-prettier";

export default [
  prettier,
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json"
      }
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort
    },

    rules: {
      /* React */
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      /* Hooks */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* TypeScript */
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": "off",

      /* Imports */
      "import/no-default-export": "warn",
      "import/order": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      /* Clean code */
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" }
      ],

      /* Accessibility */
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/no-autofocus": "warn"
    },

    settings: {
      react: {
        version: "detect"
      }
    }
  }
];