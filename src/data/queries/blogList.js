/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import fs from 'fs';
import BlogListType from '../types/BlogListType';

async function getMDX(name) {
  const mdxFile = await import(`content/blogs/${name}`);
  return mdxFile;
}

const blogfolder = './src/content/blogs';
const blogNames = [];

fs.readdirSync(blogfolder).forEach(file => {
  blogNames.push(file);
});

const blogList = {
  type: new List(BlogListType),
  resolve() {
    const promises = [];
    const results = [];
    blogNames.forEach(name => {
      promises.push(getMDX(name));
    });
    return Promise.all(promises).then(modules => {
      modules.forEach(module => {
        results.push(module.metadata);
      });
      return results;
    });
  },
};

export default blogList;
