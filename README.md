# JSS Starter

This starter Nextjs JSS project is meant to integrate directly with a Sitecore environment in a Sitecore-first development workflow, but also includes Storybook 7 as a way to build components with mock data in addition to using Storybook for its intended documentation purpose. Additionally, it's been configured with Tailwind for styling and Jest and React Testing Library for unit tests, and a baseline approach to extending JSS type definitions, along with other opinionated configuration decisions.

## Getting started

1. `npm install`
2. `npm run storybook`
3. **Future:** `npm run start:connected` (requires XM Cloud or remote Sitecore 10.3 instance).

## Running Tests

1. `npm run test`

## Todos:

- Update the `component-factory
- Update `scripts/scaffold-component.ts` to follow our file structure, generate mock data, add stories, and baseline tests.
- Update `scripts/generate-component-factory.ts` to only include components we want instead of everything in `/src/components` and to ignore mock data, testing and story files.
- Figure out decorators in `storybook/preview.ts` and how to mock `isPageEditing` when using the `withDatSource` higher order component. See [Storybook 7.0 migration](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md)
- Add husky commits hook commands and husky installation instructions.
