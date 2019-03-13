import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  compose,
} from 'styled-system'

const systemProps = compose(
  props => props,
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight
)

export const system = style => props => {
  const { theme } = props
  const styles = [ ...systemProps({ theme, ...style }) ]
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
