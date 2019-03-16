import React from 'react'
import renderer from 'react-test-renderer'
import { matchers } from 'jest-emotion'
import { useMDXComponents } from '@mdx-js/tag'
import { withTheme } from 'emotion-theming'
import {
  system,
  mergeComponents,
  mergeThemes,
  Root,
  MDXStyle,
} from './index'

expect.extend(matchers)

describe('system', () => {
  test('returns an array of style objects', () => {
    const style = system({
      color: 'tomato'
    })({})
    expect(Array.isArray(style)).toBe(true)
    expect(style).toMatchSnapshot()
  })

  test('returns styles based on theme values', () => {
    const [ a ] = system({
      fontSize: 0
    })({
      theme: {
        fontSizes: [ 33 ]
      }
    })
    expect(a.fontSize).toBe('33px')
  })

  test('returns nested styles', () => {
    const [ a, b ] = system({
      ':hover': {
        fontSize: 0
      }
    })({
      theme: {
        fontSizes: [ 33 ]
      }
    })
    expect(b[':hover'][0].fontSize).toBe('33px')
  })
})

describe('mergeComponents', () => {
  test('merges components', () => {
    const a = {
      h1: props => <h1 className='a' {...props} />,
      h2: props => <h2 className='a' {...props} />,
    }
    const b = {
      h1: props => <h1 className='b' {...props} />,
    }
    const merged = mergeComponents(b)(a)
    const h1 = merged.h1()
    const h2 = merged.h2()
    expect(typeof merged).toBe('object')
    expect(h1.props.className).toBe('b')
    expect(h2.props.className).toBe('a')
  })

  test('merges component style objects', () => {
    const a = {
      h1: props => <h1 {...props} />,
    }
    const b = {
      h1: {
        color: 'tomato',
      }
    }
    const merged = mergeComponents(b)(a)
    const h1 = renderer.create(React.createElement(merged.h1)).toJSON()
    expect(h1).toHaveStyleRule('color', 'tomato')
  })
})

describe('mergeThemes', () => {
  test('merges themes', () => {
    const merged = mergeThemes({
      colors: { red: 'red' }
    })({
      colors: { blue: 'blue' }
    })
    expect(merged.colors.red).toBe('red')
    expect(merged.colors.blue).toBe('blue')
  })
})

describe('MDXStyle', () => {
  test('provides context with base theme and components', () => {
    let theme
    let components
    const Emotion = withTheme(props => {
      theme = props.theme
      return false
    })
    const MDX = props => {
      components = useMDXComponents()
      return false
    }
    const el = (
      <MDXStyle>
        <Emotion />
        <MDX />
      </MDXStyle>
    )
    const tree = renderer.create(el)
    expect(typeof theme).toBe('object')
    expect(typeof components).toBe('object')
  })

  test('provides configured context', () => {
    let theme
    let components
    const Emotion = withTheme(props => {
      theme = props.theme
      return false
    })
    const MDX = props => {
      components = useMDXComponents()
      return false
    }
    const el = (
      <MDXStyle
        theme={{
          colors: {
            beep: 'boop'
          }
        }}
        components={{
          hr: {
            borderColor: 'tomato'
          }
        }}>
        <Emotion />
        <MDX />
      </MDXStyle>
    )
    const tree = renderer.create(el)
    const hr = renderer.create(
      React.createElement(components.hr)
    ).toJSON()
    expect(hr).toHaveStyleRule('border-color', 'tomato')
    expect(theme.colors.beep).toBe('boop')
  })
})
