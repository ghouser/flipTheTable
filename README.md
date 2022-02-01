# Flip the Table

Started as a fork of [React Starter Kit](https://github.com/kriasoft/react-starter-kit/tree/master). Made to be a personal dev space and complete starter kit.

## Tech Stack

- Back-end - [Node.js](https://nodejs.org/), [Express](http://expressjs.com/)
- API - [GraphQL](http://graphql.org/)
- Front-end - [React](https://facebook.github.io/react/)
- Tools - [Webpack](http://webpack.github.io/), [Babel](http://babeljs.io/)
  and [Browsersync](http://www.browsersync.io/).
- Styling - [Chakra UI](https://chakra-ui.com/) with [MDX](https://mdxjs.com/)

## Design Principles

The main goal is to support a broad variety of web app needs, while also remaining DRY and simple to work in.

### Use if you want:

- **Static Content**

  - Page construction assumes static content in MDX files
  - Prebuilt tools to lazy load static content from `src/content` by file path. This enables dynamic routing, rather than needing to create a route per page.

- **Full Backend**

  - GraphQL allows for all data handling to tie to declared data models and accessed with minimal code in React. This cuts down on complexity of React pages.
  - Pre existing sqlite pluggin can easily be setup to persist data for a more complex web app
  - Server side rendering

- **Component Library**
  - Chakra UI is a simple but robust component library with easy to implement global styling

## Getting Started

Follow the [getting started guide](./src/content/docs/Start-Here.mdx) to download and run the project.

## Customizing

See the [customizing guide](./src/content/docs/Customizing.mdx) to start making it your own.
