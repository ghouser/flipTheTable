/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { blogList, docList } from 'content';

// returns a promise containing a list of mdx files in the requested directory
// expected input is `blogs` or `docs`
async function listMDX(dirName) {
  if (dirName === 'docs') return docList;
  if (dirName === 'blogs') return blogList;
  return null;
}

// returns a promise of the an imported mdx file by path name
async function getMDX(name) {
  const mdxFile = await import(`content/${name}`);
  return mdxFile;
}

export { listMDX, getMDX };
