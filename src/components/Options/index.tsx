import React, { useContext } from 'react'
import { Container, IconWrapper } from './styled'
import { CardButton } from 'components/UI/Buttons'
import { Text } from 'components/UI/Texts'
import { CgRadioCheck, CgRadioChecked } from 'react-icons/cg'
import { ThemeContext } from 'styled-components'
import { Theme } from 'utils/theme'

type Props = {
  options: Array<string>
  currentOption: string
  selectOption: (option: string) => void
  voted: boolean
}

const Options = (props: Props) => {
  const { options, currentOption, selectOption, voted } = props
  const theme = useContext<Theme>(ThemeContext)

  const _renderTextColors = (option: string) => {
    if (voted && currentOption !== option) {
      return theme.colors.disabled
    }
    if (currentOption === option) {
      return theme.colors.secondary
    }
  }

  const _renderOption = (option: string) => {
    const handleClick = () => {
      if (!voted) {
        selectOption(option)
      }
    }

    return (
      <CardButton
        key={option}
        height="50px"
        onClick={handleClick}
        disabled={voted}>
        <IconWrapper>
          {currentOption === option ? (
            <CgRadioChecked size={14} color={theme.colors.secondary} />
          ) : (
            <CgRadioCheck size={14} color={_renderTextColors(option)} />
          )}
        </IconWrapper>
        <Text color={_renderTextColors(option)}>{option}</Text>
      </CardButton>
    )
  }

  return (
    <Container>
      {options.map((option: string) => _renderOption(option))}
    </Container>
  )
}

export default Options
