# JSS Starter

This starter NextJS project is meant to integrate directly with a Sitecore environment in a Sitecore-first development workflow, but also includes Storybook 7 as a way to build components with mock data in addition to using Storybook for its intended documentation purpose. Additionally, it's been configured with Tailwind for styling and Jest and React Testing Library for unit tests, and a baseline approach to extending JSS type definitions, along with other opinionated configuration decisions.

## Getting Started

### Requirements

- [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM)

### Installation and Setup

1. Install NVM.

   ```
   $ nvm install X.X.X
   $ nvm use X.X.X
   ```

   **NOTE:** Check that the installed version of Node matches the minimum required by the project. See the "engine" property of the *package.json*.

   **NOTE:** `nvm use X.X.X` will set the active Node version for the duration of the session. To change the default version of Node, use `nvm alias default X.X.X`.
1. Install project dependencies.

   ```
   $ npm install
   ```

   **NOTE:** This project has been made. PNPM, Yarn, etc. can be used in place of NPM if desired.

### Buildng and Running the Project

- `npm run storybook` will start Storybook in disconnected (local) mode.
- `npm run start:connected` will start the project in connected mode. (Requires an XM Cloud or remote Sitecore 1.03 instance.)
- `npm run test` will execute the project's Jest test suite.

## Todos

- Update the `component-factory
- Update `scripts/scaffold-component.ts` to follow our file structure, generate mock data, add stories, and baseline tests.
- Update `scripts/generate-component-factory.ts` to only include components we want instead of everything in `/src/components` and to ignore mock data, testing and story files.
- Figure out decorators in `storybook/preview.ts` and how to mock `isPageEditing` when using the `withDatSource` higher order component. See [Storybook 7.0 migration](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md)
- Add husky commits hook commands and husky installation instructions.
