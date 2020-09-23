import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

const StyledApp = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.righteous};
  }
  #root {
    height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
  }
`

export default StyledApp
