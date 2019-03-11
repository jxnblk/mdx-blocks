
# mdx-blocks

```mdx
import { Header } from 'mdx-blocks'
export default Header

# Hello

- [Blog](/blog)
- [Features](/features)
- [About](/about)
```

```mdx
import { Banner } from 'mdx-blocks'
export default Banner

# Hello

This is a banner

![](kitten.png)
```

```jsx
import Header from './header.mdx'
import Banner from './banner.mdx'

export default props =>
  <>
    <Header />
    <Banner />
  </>
```

MIT License
