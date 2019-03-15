
# MDX Blocks

A wild new way to build websites
**EXPERIMENTAL**

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

---

## API

## BlocksProvider

```js
import { BlocksProvider } from 'mdx-blocks'
```

The BlocksProvider component should wrap all other MDX blocks.
It provides a base theme and MDX components via React context.
The base theme and components can be overridden with the `theme` and `components` props respectively.

```jsx
// example usage
<BlocksProvider
  theme={myCustomTheme}
  components={myCustomComponents}>
  {/* the rest of your MDX Blocks go here */}
</BlocksProvider>
```

**Props**

- `theme` a [styled-system][] theme object with MDX Blocks specific [colors](#theming)
- `components` an object of React components *or* style objects that correspond to MDX elements

## MDX Layout Components

The mdx-block layout components can be used as layouts for short MDX documents that are meant for small sections of an entire page.
Each layout component should be used as the default export in an MDX file.

```mdx
// example .mdx file
import { Bar } from 'mdx-blocks'

export default Bar
```

To pass custom props to the layout component, export a wrapped component:

```mdx
// example .mdx file
import { Bar } from 'mdx-blocks'

export default props =>
  <Bar
    {...props}
    color='white'
    bg='black'
  />
```

**Props**

All layout components accept the following props:

- `components` (object) an object of React components or style objects for child MDX elements
- `color` (string) foreground text color
- `bg` (string) background color
- [styled-system][] space props:
  `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`,
  `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`,

**Component Styles**

The `components` object passed to a block can completely replace a child component or adjust the styles of the component within the block's context.
When passing a style object, certain properties are passed to [styled-system][] to allow for theme-based values to be used.

```mdx
import { Banner } from 'mdx-blocks'
export default props =>
  <Banner
    {...props}
    components={{
      h1: {
        fontSize: [5, 6],
        color: 'primary',
      }
    }}
  />

# Customized Heading
```

### Bar

A horizontal bar layout, intended for navigation bars or toolbars

```mdx
import { Bar } from 'mdx-block'

export default Bar

# Hello

- [Link](#)
- [Link](#)
- [Button](# 'button')
```

### Banner

A large banner that uses images as a background image

```mdx
import { Banner } from 'mdx-blocks'
export default Banner

![](background-image.jpg)

# Banner
```

### Cards

Splits content by images to create a tiled card layout

```mdx
import { Cards } from 'mdx-blocks'
export default Cards

![kitten](kitten.jpg)

A kitten

![puppy](puppy.jpg)

A puppy

![bunny](bunny.jpg)

A bunny
```

### Center

Center-aligns text

```mdx
import { Center } from 'mdx-blocks'
export default Center

# Centered Heading
```

### Columns

Creates columns based on the number of child elements

```mdx
import { Columns } from 'mdx-blocks'
export default Columns

- One
- Two
- Three


- Alpha
- Beta
- Gamma
```

### Split

Splits content into two columns, with an image on the right

```mdx
import { Split } from 'mdx-blocks'
export default Split

# Split

This content will be on the left

![](right-side.jpg)
```

### Tiles

Splits content at headings, creating a tiled layout

```mdx
import { Tiles } from 'mdx-blocks'
export default Tiles

## One

Hello

## Two

Beep
```

## Theming

The overall look and feel of MDX Blocks can be customized by passing a theme to the `BlocksProvider` component.
Theming consists of a [styled-system][] `theme` object and a `components` object to control what components are rendered from MDX elements.

```jsx
import React from 'react'
import { BlocksProvider } from 'mdx-blocks'
import { theme, components } from './my-custom-theme'

export default props =>
  <BlocksProvider
    theme={theme}
    components={components}>
    {props.children}
  </BlocksProvider>
```

### Theme Object

```
{
  colors {
    text
    background
    primary
    secondary
    highlight
    muted
  }
  space []
  fontSizes []
  fonts {
    body
    heading
    monospace
  }
  fontWeights {
    body
    bold
    heading
  }
  lineHeights {
    body
    heading
  }
  maxWidths {
    container
  }
}
```

### Components Object

TK

- `img`
- `a`
- `button`
- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`

## Block Authoring

TK

- Block
- Box
- util

MIT License

[styled-system]: https://styled-system.com
[demo]: https://mdx-blocks.netlify.com
