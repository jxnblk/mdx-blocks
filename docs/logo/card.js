import React from 'react'
import { Rects } from './rects'
import { funk } from '../../themes'

const { colors } = funk.theme
colors.yellow = '#ec0'

export default props =>
  <Rects
    width={1280}
    height={720}
    value={[
      [ 0, 8, 8, 8, colors.primary ],
      [ 0, 16, 16, 8, colors.highlight ],
      [ 16, 0, 12, 12, colors.primary ],
      [ 28, 0, 12, 6, colors.yellow ],
      [ 28, 20, 12, 12, colors.highlight ],
      [ 4, 4, 16, 16, 'none', 'black' ],
      [ 14, 10, 8, 8, 'none', 'black' ],
      [ 22, 10, 16, 8, 'none', 'black' ],
      [ 32, -4, 16, 8, 'none', 'black' ],
    ]}
  />
