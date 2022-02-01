/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import { getMDX, listMDX } from '../utils/MDXFileHelper';
import FileMetadata from '../types/MetadataType';

const blogList = {
  type: new List(FileMetadata),
  resolve() {
    const promises = [];
    const results = [];
    return listMDX('blogs').then(blogNames => {
      blogNames.forEach(name => {
        // create an array of promised MDX files
        promises.push(getMDX(`blogs/${name}.mdx`));
      });
      // for each file, get the metadata object and add to results array
      return Promise.all(promises).then(modules => {
        modules.forEach(module => {
          results.push(module.metadata);
        });
        // return results array
        return results;
      });
    });
  },
};

const docList = {
  type: new List(FileMetadata),
  resolve() {
    const promises = [];
    const results = [];
    return listMDX('docs').then(docNames => {
      docNames.forEach(name => {
        // create an array of promised MDX files
        promises.push(getMDX(`docs/${name}.mdx`));
      });
      // for each file, get the metadata object and add to results array
      return Promise.all(promises).then(modules => {
        modules.forEach(module => {
          results.push(module.metadata);
        });
        // return results array
        return results;
      });
    });
  },
};

export { blogList, docList };
