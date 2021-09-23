/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
// chakra and theme
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import ApplicationContext from './ApplicationContext';
import { CustomTheme, MDXComponents } from './Theme';

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context} insertCss={() => {}}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

export default function App({ context, children }) {
  // NOTE: If you need to add or modify header, footer etc. of the app,
  // please do that inside the Layout component.
  return (
    <ApplicationContext.Provider value={{ context }}>
      <MDXProvider components={MDXComponents}>
        <ThemeProvider theme={CustomTheme}>
          <CSSReset />
          {React.Children.only(children)}
        </ThemeProvider>
      </MDXProvider>
    </ApplicationContext.Provider>
  );
}

App.propTypes = {
  context: PropTypes.shape({
    // Universal HTTP client
    fetch: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object,
  }).isRequired,
  children: PropTypes.element.isRequired,
};
