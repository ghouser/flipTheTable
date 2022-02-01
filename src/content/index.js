/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import * as blogs from './blogs/*.mdx';
import * as docs from './docs/*.mdx';

/**
 * Grab the list of blogs and store them in a blog list
 */
const blogList = Object.keys(blogs);

/**
 * Grab the list of docs and store them in a doc list
 */
const docList = Object.keys(docs);

export { blogList, docList };
