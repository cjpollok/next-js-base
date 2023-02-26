# Next.js Base

A Next.js setup for use as the base of other projects.

## Getting Started

### Installation

Install all dependencies from the CLI:
```sh
npm install
```

### Development

The application can be run locally with hot reloading at `http://localhost:3000`:
```sh
npm run dev
```

## Built With

### Code

- [Next.js](https://nextjs.org) - React Framework
- [TypeScript](https://www.typescriptlang.org) - Strongly typed programming language that builds on JavaScript
- [Styled Components](https://styled-components.com/) - CSS-in-JS solution for embedded styles

### Unit Testing

- [Jest](https://jestjs.io) - Testing Framework
- [React Testing Library](https://github.com/testing-library/react-testing-library) - React DOM testing utilities
- [user-event](https://github.com/testing-library/user-event) - Simulate real events that would happen in the browser

### Tooling

- [Prettier](https://prettier.io) - Opinionated code formatter
- [Eslint](https://eslint.org) - Linting rules with [Next.js](https://nextjs.org/docs/basic-features/eslint#eslint-config), [TypeScript](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin), [Prettier](https://github.com/prettier/eslint-plugin-prettier) and [React Testing Library](https://github.com/testing-library/eslint-plugin-testing-library)
- [Stylelint](https://stylelint.io) - Linting the CSS in Styled Components
- [EditorConfig](https://editorconfig.org) - Consistent coding styles across various editors and IDEs
- [Husky](https://typicode.github.io/husky) - Pre-commit Git hook fixing lint issues with [lint-staged](https://github.com/okonet/lint-staged)
- [Node Version Manager](https://github.com/nvm-sh/nvm) - Consistent version of node

### Redux (redux branch)

- [Redux Toolkit](https://redux-toolkit.js.org) - Recommended opinionated library to write [Redux](https://react-redux.js.org) logic
- [Redux Wrapper for Next.js](https://github.com/kirill-konshin/next-redux-wrapper) - Manages store instances across page rendering

### Design System (chakra-ui branch)

- [Chakra UI](https://chakra-ui.com) - Modular and accessible component library
- [Storybook](https://storybook.js.org) - Build and test UI components in isolation

## License

This project is licensed under the MIT License - see the LICENSE.txt file for details
