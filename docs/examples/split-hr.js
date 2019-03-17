import React from 'react'
import { Link } from '../components'
import {
  BlocksProvider,
  getType,
  Bar,
  Banner,
  Tiles,
} from '../../index'

export default props => {
  const children = React.Children.toArray(props.children)
  const chunks = children.reduce((a, child) => {
    const type = getType(child)
    if (type === 'hr') {
      a.push([])
    } else {
      a[a.length - 1].push(child)
    }
    return a
  }, [[]])

  const [
    header,
    banner,
    tiles,
  ] = chunks

  return (
    <BlocksProvider
      baseComponents={{
        a: Link,
      }}
    >
      <Bar
        color='primary'
        bg='muted'
      >
        {header}
      </Bar>
      <Banner
        color='white'
        py={[6, 7]}
      >
        {banner}
      </Banner>
      <Tiles>
        {tiles}
      </Tiles>
    </BlocksProvider>
  )
}
