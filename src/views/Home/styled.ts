import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  margin: 5% 0;
  height: 140px;
`

export const ImageButton = styled.img`
  height: 24px;
  position: absolute;
  left: 8%;
`

export const TextWrapper = styled.div`
  text-align: center;
  width: 50%;
  min-width: 250px;
  max-width: 300px;
  margin: 20% 0;
`
