/**
 * Copyright © 2020-Flip the Table. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// this exists to import all mdx files, ensuring webpack gives them proper names
import Blog1 from './blogs/blog1.mdx';
import Blog2 from './blogs/blog2.mdx';

import(/* webpackChunkName: 'blogs/blog1' */ './blogs/blog1.mdx');
import(/* webpackChunkName: 'blogs/blog2' */ './blogs/blog2.mdx');
import(/* webpackChunkName: 'blogs/blog3' */ './blogs/blog3.mdx');
import(/* webpackChunkName: 'blogs/test' */ './blogs/test.mdx');
import(/* webpackChunkName: 'docs/Start-Here' */ './docs/Start-Here.mdx');
// eslint does not like the long filenames
import(
  /* webpackChunkName: 'docs/Creating-Dynamic-Pages' */ './docs/Creating-Dynamic-Pages.mdx'
);
import(
  /* webpackChunkName: 'docs/Static-Content-With-MDX' */ './docs/Static-Content-With-MDX.mdx'
);

export { Blog1, Blog2 };
