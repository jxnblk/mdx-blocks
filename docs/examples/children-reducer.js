import React from 'react'
import { reduceChildren } from '../../index'

const Reduced = props => {
  const elements = reduceChildren(props.children)

  return (
    <>
      <pre>Reduced</pre>
      <pre>{Object.keys(elements).join()}</pre>
      {elements.omit('img')}
      {elements.img}
    </>
  )
}

export default props =>
  <Reduced>
    <img
      src='https://s3.amazonaws.com/jxnblk/leia.jpg'
      width='256'
    />
    <h1>Hello</h1>
    <p>Reduced Children</p>
  </Reduced>
