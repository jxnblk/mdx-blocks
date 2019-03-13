import {
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  compose,
} from 'styled-system'
import omit from 'lodash.omit'

const systemProps = [
  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
  'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'color',
  'bg',
  'backgroundColor',
]

const css = props => omit(props, systemProps)

const sx = compose(
  css,
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight
)

export const system = style => props => {
  // handle usage in styled components & in css prop
  const theme = props.theme || props
  const styles = [ ...sx({ theme, ...style }) ]
  for (const key in style) {
    const val = style[key]
    if (!val || typeof val !== 'object') continue
    styles.push({
      [key]: system(val)(props)
    })
  }
  return styles.filter(Boolean)
}

export default system
