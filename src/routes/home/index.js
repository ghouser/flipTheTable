/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import LandingPage from 'components/LandingPage';
import Layout from 'components/Layout';
import photo from 'content/Blog_Banner.png';
import Home from './Home';

const title = 'Home';

function action() {
  return {
    title,
    chunks: ['home'],
    component: (
      <Layout>
        <LandingPage title={title} photo={photo} />
        <Home />
      </Layout>
    ),
  };
}

export default action;
