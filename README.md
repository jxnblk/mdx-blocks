
# mdx-blocks

```mdx
export { Header as default } from 'mdx-blocks'

# Hello

- [Blog](/blog)
- [Features](/features)
- [About](/about)
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

## API

- Provider ({ components, theme })
- Wrapper, Layout, RenderChildren,
- content blocks
  - Header
  - Nav
  - Banner
  - Tiles
  - Cards
  - Columns
- low-level
  - Chunk (by element type)
  - ExtractImages
- primitives
  - Box
  - Image
  - Link
  - Button
  - Heading
  - Text

---

## Notes

- [ ] Provider via layouts
- [ ] Header
- [ ] Banner
- [ ] Tiles
- [ ] Cards
- [ ] Primitives
  - [x] Box
  - [ ] Button
  - [ ] Image
  - [ ] Heading
  - [ ] Text
