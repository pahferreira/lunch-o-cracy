import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const IconWrapper = styled.div`
  position: absolute;
  left: 8%;
  margin-top: 2px;
`
