/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
// import fs from 'fs';
// import path from 'path';
import BlogListType from '../types/BlogListType';

async function getMDX(name) {
  const mdxFile = await import(`content/blogs/${name}`);
  return mdxFile;
}

// walks back one level from __dirname (which sould be src)
// const ROOT_DIR = path.resolve(__dirname, '..');
// function to add ROOT_DIR to another path
// const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
// add ROOT_DIR to scr/content/blogs to get path to blogs
// const blogFolder = resolvePath('src/content/blogs');
// const blogFolder = './src/content/blogs';
const blogNames = ['blog1.mdx', 'blog2.mdx', 'blog3.mdx', 'test.mdx'];

// fs.readdirSync(blogFolder).forEach(file => {
//   blogNames.push(file);
// });

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
