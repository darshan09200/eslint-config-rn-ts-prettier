# eslint-config-rn-ts-prettier

[![npm version](https://img.shields.io/npm/v/eslint-config-rn-ts-prettier.svg)](https://www.npmjs.com/package/eslint-config-rn-ts-prettier)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-rn-ts-prettier.svg)](https://www.npmjs.com/package/eslint-config-rn-ts-prettier)
[![License: MIT](https://img.shields.io/github/license/darshan09200/eslint-config-rn-ts-prettier?color=green)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/darshan09200/eslint-config-rn-ts-prettier/pulls)

:sparkles: **Shareable ESLint config for React Native projects using TypeScript and Prettier.**  

**Strict, modern, and focused on fast, readable code.**

---

## ✨ Features

* Airbnb, React, and Prettier code style out of the box
* TypeScript and React Native accessibility support
* Sorted imports, unused import removal, and lodash import hygiene
* Developer-friendly and easy to extend

---

## 📦 Installation

```bash
npm install --save-dev eslint-config-rn-ts-prettier eslint prettier typescript
````

or with **Yarn**:

```bash
yarn add --dev eslint-config-rn-ts-prettier eslint prettier typescript
```

---

## 🚀 Usage

Add to your ESLint config (e.g., `.eslintrc.js`):

```js
module.exports = {
  extends: ['rn-ts-prettier'],
};
```

---

## 🛠️ Customizing Internal Import Order

This config does **not** enforce a specific internal import order for your folders like `components`, `screens`, or `utils`.
**To customize your order, override the `simple-import-sort/imports` rule:**

```js
module.exports = {
  extends: ['rn-ts-prettier'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          ['^(screens|components|utils|hooks)(/.*)?$'], // Customize as needed!
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
};
```

---

## 📝 Example

A minimal `.eslintrc.js` for React Native + TypeScript:

```js
module.exports = {
  extends: ['rn-ts-prettier'],
  rules: {
    // Customize rules as needed
  },
};
```

---

## 🙌 Contributing

Contributions, issues, and PRs are welcome!
Feel free to [open an issue](https://github.com/darshan09200/eslint-config-rn-ts-prettier/issues) or [submit a PR](https://github.com/darshan09200/eslint-config-rn-ts-prettier/pulls).

---

## 📄 License

MIT

---

## 💡 Author

[Darshan Jain](https://github.com/darshan09200)

---
