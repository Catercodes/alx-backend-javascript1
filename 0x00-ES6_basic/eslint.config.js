// Import necessary plugins and configurations
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";

// Export the ESLint configuration
export default {
  extends: [
    "next/core-web-vitals", // Use Next.js recommended config
    "eslint:recommended", // Use ESLint's recommended config
    "plugin:@typescript-eslint/recommended" // Use TypeScript's recommended config
  ],
  parser: "@typescript-eslint/parser", // Use TypeScript parser
  plugins: ["@typescript-eslint"], // Enable TypeScript plugin
  languageOptions: {
    globals: {
      ...pluginJs.configs.recommended.languageOptions.globals,
      ...tseslint.configs.recommended.languageOptions.globals,
      browser: true // Add additional global if needed
    }
  },
  rules: {
    // Add custom rules if needed
  }
};
