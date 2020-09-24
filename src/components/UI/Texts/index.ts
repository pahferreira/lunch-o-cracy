import styled from 'styled-components'

type SubtitleProps = {
  color?: string
}

export const Title = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fonts.ribeye};
  color: ${({ theme }) => theme.colors.success};
`

export const Subtitle = styled.p<SubtitleProps>`
  margin: 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`

export const Text = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme, color }) => (color ? color : theme.colors.text)};
`
