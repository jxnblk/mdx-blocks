// VERY experimental
import React from 'react'

/*
 *  Usage
 *
 *  ```mdx
 *  import PageBlocks from 'mdx-blocks/dist/page-blocks'
 *  import { Bar, Banner } from 'mdx-blocks'
 *
 *  export default PageBlocks
 *
 *  <Bar
 *    color='white'
 *    bg='black'
 *  />
 *
 *  # Hello Bar
 *
 *  - [Link](#)
 *  - [Click](#)
 *  - [Beep](# 'button')
 *
 *  <Banner
 *    color='white'
 *    bg='blue'
 *  />
 *
 *  ![](background.jpg)
 *
 *  # Wow!
 *
 *  So cool.
 *  ```
 */

const split = children => {
  const blocks = React.Children.toArray(children)
    .reduce((a, child, index) => {
      if (child.type.isBlock || child.props['data-block']) {
        a.push(
          React.cloneElement(child, { key: index, children: [] })
        )
      } else {
        a[a.length - 1].props.children.push(child)
      }
      return a
    }, [ <React.Fragment key={0} children={[]} /> ])
  return blocks
}

export default ({
  children,
  ...props
}) => {
  const blocks = split(children)
  return (
    <>
      {blocks}
    </>
  )
}
