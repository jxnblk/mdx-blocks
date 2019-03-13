
# mdx-blocks

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

```mdx
import { Banner } from 'mdx-blocks'
export default Banner

# Hello

This is a banner with a background image.

![](kitten.png)
```

```jsx
// Combine blocks together to create a page
import { Provider } from 'mdx-blocks'
import Header from './header.mdx'
import Banner from './banner.mdx'

export default props =>
  <Provider>
    <Header />
    <Banner />
  </Provider>
```

## API

### MDX Layout Components

### Block Authoring

MIT License
