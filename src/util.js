import { PROP } from './constants'

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
