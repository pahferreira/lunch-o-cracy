import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const GreenText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fonts.ribeye};
  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`

export const RedText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-family: ${({ theme }) => theme.fonts.ribeye};
  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`
