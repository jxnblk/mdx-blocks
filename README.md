
![icon](https://mdx-blocks.netlify.com/icon.png)

# MDX Blocks

A wild new way to build websites
**EXPERIMENTAL**

[![build status][]][travis]
[![version][]][npm]
![MIT License][license]

[build status]: https://flat.badgen.net/travis/jxnblk/mdx-blocks
[version]: https://flat.badgen.net/npm/v/mdx-blocks
[license]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/mdx-blocks
[travis]: https://travis-ci.org/jxnblk/mdx-blocks

https://mdx-blocks.netlify.com

```sh
npm i mdx-blocks
```

Import and use MDX Blocks as layout components

```mdx
import { Bar } from 'mdx-blocks'

export default props =>
  <Bar
    {...props}
  />

# Hello

- [Link](/)
- [Click](/click)
- [Beep](/beep)
```

Create a block for each section of a page

```mdx
import { Banner } from 'mdx-blocks'
export default Banner

# Hello

This is a banner with a background image.

![](kitten.png)
```

```jsx
// Combine blocks together to create a page
import { BlocksProvider } from 'mdx-blocks'
import Header from './header.mdx'
import Banner from './banner.mdx'

export default props =>
  <BlocksProvider>
    <Header />
    <Banner />
  </BlocksProvider>
```

## Features

- Write content in markdown and use React components inline with [MDX][]
- Customize the look and feel with theming
- Create custom block layouts with minimal effort
- Quickly swap out the layout of blocks without touching the content

## Get Started

[Read the docs][docs]

---

## Related

- [MDX][]
- [Emotion][]
- [Styled System][]


[Code of Conduct](CODE_OF_CONDUCT.md)
[MIT License](LICENSE.md)

[mdx]: https://mdxjs.com
[emotion]: https://emotion.sh
[styled-system]: https://styled-system.com
[styled system]: https://styled-system.com
[demo]: https://mdx-blocks.netlify.com
[docs]: https://mdx-blocks.netlify.com/docs/
[theming docs]: https://mdx-blocks.netlify.com/docs/creating-themes
