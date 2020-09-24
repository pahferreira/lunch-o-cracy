import styled from 'styled-components'

type TextButtonProps = {
  color?: string
}

export const TextButton = styled.div<TextButtonProps>`
  cursor: pointer;
  min-width: 48px;
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
  font-size: ${({ theme }) => theme.fontSize.regular};
  display: flex;
  align-items: center;
  justify-content: center;
`

type CardButtonProps = {
  height?: string
  disabled?: boolean
}

export const CardButton = styled.div<CardButtonProps>`
  position: relative;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  width: 100%;
  max-width: 320px;
  min-width: 240px;
  height: ${({ height }) => (height ? height : '80px')};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.regular};
  transition: all 300ms;
  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-4px)')};
  }
`

type ButtonProps = {
  bgColor?: string
  textColor?: string
  disabled?: boolean
}
export const Button = styled.div<ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, bgColor }) =>
    bgColor ? bgColor : theme.colors.white};
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: ${({ theme, textColor }) =>
    textColor ? textColor : theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.regular};
  transition: all 300ms;
  min-width: 160px;
  height: 48px;
  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-4px)')};
  }
`
