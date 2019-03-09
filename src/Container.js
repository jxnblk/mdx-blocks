import styled from '@emotion/styled'
import { maxWidth } from 'styled-system'
import Box from './Box'

export const Container = styled(Box)(maxWidth)

Container.defaultProps = {
  mx: 'auto',
  maxWidth: 'maxWidth',
}

export default Container
