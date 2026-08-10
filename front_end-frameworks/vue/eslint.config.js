import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/**'],
  },

  js.configs.recommended,

  ...pluginVue.configs['flat/recommended'],

  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  eslintConfigPrettier,
]