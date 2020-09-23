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
export const CardButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 320px;
  min-width: 240px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.regular};
  transition: all 300ms;
  &:hover {
    transform: translateY(-2px);
  }
`
