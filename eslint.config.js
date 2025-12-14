import tsParser from '@typescript-eslint/parser'
import ts from '@typescript-eslint/eslint-plugin'
import vuePlugin from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  // 1) Archivos Vue
  {
    files: ['**/*.vue'],
    ignores: ['.nuxt', 'node_modules', 'dist'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      vue: vuePlugin,
      prettier: prettierPlugin
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': ['error'] // 👈 activamos Prettier
    }
  },

  // 2) Archivos TS/JS
  {
    files: ['**/*.{ts,js}'],
    ignores: ['.nuxt', 'node_modules', 'dist'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      prettier: prettierPlugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': ['error'] // 👈 activamos Prettier
    }
  }
]
