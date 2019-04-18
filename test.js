import React from 'react'
import renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { mdx } from '@mdx-js/react'
import {
  BlocksProvider,
  Block,
  getType,
  isHeading,
  isImage,
  getImages,
  getNonImages,
  getImageSource,
  chunkElements,
} from './index'

expect.extend(matchers)

describe('BlocksProvider', () => {
  test('provides MDX context', () => {
    const el = mdx(BlocksProvider, {
      components: {
        h1: props => <h2 {...props} />
      }
    },
      mdx('h1', null, 'Hello')
    )
    const json = renderer.create(el).toJSON()
    const [ h1 ] = json.children
    expect(h1.type).toBe('h2')
  })
})

describe('Block', () => {
  test('renders', () => {
    const json = renderer.create(
      mdx(Block, { p: 3, bg: 'tomato' })
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})

describe('util', () => {
  test('getType returns element type', () => {
    const type = getType(
      mdx('h2', null, 'hi')
    )
    expect(type).toBe('h2')
  })

  test('isHeading returns true', () => {
    const is = isHeading('h1')
    expect(is).toBe(true)
  })

  test('isHeading returns false', () => {
    const is = isHeading('hr')
    expect(is).toBe(false)
  })

  test('isImage returns true', () => {
    const is = isImage(
      mdx('img', { src: 'kitten.png' })
    )
    expect(is).toBe(true)
  })

  test('isImage returns false', () => {
    const is = isImage(
      mdx('h2')
    )
    expect(is).toBe(false)
  })

  test('getImages returns images', () => {
    const images = getImages([
      mdx('h2'),
      mdx('h3'),
      mdx('img', { src: 'kitten.png' }),
      mdx('img', { src: 'puppy.png' }),
    ])
    expect(images.length).toBe(2)
  })

  test('getNonImages returns other elements', () => {
    const elements = getNonImages([
      mdx('h3'),
      mdx('img', { src: 'kitten.png' }),
      mdx('img', { src: 'puppy.png' }),
    ])
    expect(elements.length).toBe(1)
    expect(elements[0].props.mdxType).toBe('h3')
  })

  test('getImageSource returns first image src', () => {
    const src = getImageSource([
      mdx('h2'),
      mdx('h3'),
      mdx('img', { src: 'kitten.png' }),
      mdx('img', { src: 'puppy.png' }),
    ])
    expect(src).toBe('kitten.png')
  })

  test('chunkElements splits elements', () => {
    const chunks = chunkElements(type => type === 'img')([
      mdx('img', { src: 'kitten.png' }),
      mdx('h2'),
      mdx('img', { src: 'puppy.png' }),
      mdx('h3'),
    ])
    expect(chunks.length).toBe(2)
  })
})
