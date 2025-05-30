
# eslint-config-rn-ts-prettier

Shareable ESLint config for **React Native** projects using **TypeScript** and **Prettier**.

## Features

- Airbnb, React, and Prettier best practices
- TypeScript & React Native accessibility support
- Sorted, unused, and specific imports (with `simple-import-sort`, `unused-imports`, and `lodash-specific-import`)
- **Configurable internal package import grouping** (see below)

---

## Installation

1. **Install the config and all peer dependencies:**

  ```bash
  npm install --save-dev eslint-config-rn-ts-prettier
  ```

> You will also need to install all required peer dependencies as listed in `package.json` (such as `eslint`, `prettier`, `eslint-plugin-react`, etc.).

2. **Extend the config in your ESLint configuration file (`.eslintrc.js`):**

   ```js
   module.exports = {
     extends: ['rn-ts-prettier'],
   };
   ```

---

## Customizing Internal Package Import Order

By default, this config does **not** set a specific order for your internal packages (like `components`, `screens`, etc.) in import sorting.
**You are encouraged to customize the order for your project.**

### How to Override Internal Import Order

1. **In your project's `.eslintrc.js`, override the `simple-import-sort/imports` rule and specify your internal groups:**

   ```js
   module.exports = {
     extends: ['rn-ts-prettier'],
     rules: {
       'simple-import-sort/imports': [
         'error',
         {
           groups: [
             // Side effect imports.
             ['^\\u0000'],
             // Packages.
             ['^react', '^@?\\w'],
             // Your internal packages (edit as needed!)
             ['^(screens|components|utils|hooks)(/.*)?$'],
             // Parent imports. Put `..` last.
             ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
             // Other relative imports. Put same-folder imports and `.` last.
             ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
           ],
         },
       ],
     },
   };
   ```

   > **Tip:** Update the `['^(screens|components|utils|hooks)(/.*)?$']` group with the exact folder names used in your project, in your desired order.

---

## Example `.eslintrc.js`

```js
module.exports = {
  extends: ['rn-ts-prettier'],
  rules: {
    // Customize your internal import order here
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          ['^(screens|components|utils|hooks)(/.*)?$'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
};
```

---

## Why customize this?

Different projects organize their code with different internal folder names and conventions. By letting you override the internal import sorting group, you keep your codebase’s imports clean and in a logical order—**your way.**

---

## Questions?

If you need help or want to suggest improvements, please open an issue or PR!

---

*Happy coding!*
