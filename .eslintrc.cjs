module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  plugins: ['react-refresh', "react", "import", "jsx-a11y"],
  rules: {
    "react/prop-types": 0, "react/react-in-jsx-scope": 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", "ts", "tsx"]
      }
    }
  }
}
