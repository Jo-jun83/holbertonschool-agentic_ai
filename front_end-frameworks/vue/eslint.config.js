import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
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

    rules: {},
  },

  eslintConfigPrettier,
]