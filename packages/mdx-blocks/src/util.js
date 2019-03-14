import React from 'react'
import styled from '@emotion/styled'
import merge from 'lodash.merge'
// import system from './themes/system'

const PROP = 'mdxType'

/* moved to mdx-style
const createButtonLink = (Link, Button) => ({
  title,
  ...props
}) =>
  (title === 'button')
    ? <Button {...props} />
    : <Link title={title} {...props} />

export const mergeComponents = (...overrides) => base => {
  const components = { ...base }
  overrides.forEach(obj => {
    for (const key in obj) {
      // const Component = base[key] || key
      const override = obj[key]
      if (!override) continue
      if (typeof override === 'function') {
        components[key] = override
      } else if (typeof override === 'object') {
        components[key] = styled(components[key] || key)(system(override))
      }
    }
  })
  components.a = createButtonLink(components.a || 'a', components.button || 'button')
  return components
}
export const mergeTheme = overrides => base => merge(base, overrides)
*/

export const getType = el => el.props[PROP]

export const isHeading = tag => /^h[1-6]/.test(tag)

export const chunkElements = test => elements => {
  const indices = [0]
  const chunks = []
  elements.forEach((el, i) => {
    const type = el.props[PROP]
    if (test(type)) indices.push(i)
  })
  indices.forEach((a, i) => {
    const b = indices[i + 1]
    const children = elements.slice(a, b)
    if (!children.length) return
    chunks.push(children)
  })
  return chunks
}

export const isImage = el => getType(el) === 'img' || el.type === 'img'
export const getImages = elements => elements.filter(isImage)
export const getNonImages = elements => elements.filter(el => !isImage(el))
export const getImageSource = elements => {
  const [ img ] = getImages(elements)
  if (!img) return
  return img.props.src
}
