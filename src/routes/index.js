/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    // {
    //   path: '/login',
    //   load: () => import(/* webpackChunkName: 'login' */ './login'),
    // },
    // {
    //   path: '/register',
    //   load: () => import(/* webpackChunkName: 'register' */ './register'),
    // },
    // {
    //   path: '/admin',
    //   load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    // },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/docs',
      load: () => import(/* webpackChunkName: 'docs' */ './docs'),
    },
    {
      path: '/docs/:name',
      load: () => import(/* webpackChunkName: 'docsPage' */ './docsPage'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/blog',
      load: () => import(/* webpackChunkName: 'blog' */ './blog'),
    },
    {
      path: '/blog/:name',
      load: () => import(/* webpackChunkName: 'blogPage' */ './blogPage'),
    },
    {
      path: '/tools',
      load: () => import(/* webpackChunkName: 'tools' */ './tools'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - flipthetable.net`;
    route.description = route.description || '';
    route.forceReload = route.forceReload || false;

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
