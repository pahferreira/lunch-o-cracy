import React, { useContext } from 'react'
import { Container } from './styled'
import Logo from 'components/Logo'
import { TextButton } from 'components/UI/Buttons'
import { ThemeContext } from 'styled-components'
import { Theme } from 'utils/theme'

const Header = () => {
  const theme = useContext<Theme>(ThemeContext)

  return (
    <Container>
      <Logo />
      <TextButton color={theme.colors.primary}>Login</TextButton>
    </Container>
  )
}

export default Header
