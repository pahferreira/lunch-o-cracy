import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

const StyledApp = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.righteous};
  }
  #root {
    box-sizing: border-box;
  }
`

export default StyledApp
