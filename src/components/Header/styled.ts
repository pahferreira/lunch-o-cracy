import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  @media screen and (max-width: 600px) {
    padding: 15px;
    margin-bottom: 30px;
  }
`
