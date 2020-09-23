import React, { FC, useContext } from 'react'
import { Container, Image, TextWrapper, Content, ImageButton } from './styled'
import { Subtitle, Title, Text } from 'components/UI/Texts'
import { CardButton } from 'components/UI/Buttons'
import { ThemeContext } from 'styled-components'
import { Theme } from 'utils/theme'
import TrophyPNG from 'assets/trophy.png'
import GooglePNG from 'assets/google.png'
import {
  useGoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

const Home: FC = () => {
  const theme = useContext<Theme>(ThemeContext)

  const onLogin = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void => {
    console.log(response)
  }
  const { signIn } = useGoogleLogin({
    onSuccess: onLogin,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    onFailure: (response: any) => console.log(response),
    scope: 'profile',
  })

  return (
    <Container>
      <Content>
        <Subtitle color={theme.colors.primary}>
          Last resturant selected
        </Subtitle>
        <Subtitle>21/09/2020</Subtitle>
        <Image src={TrophyPNG} />
        <Title>China Taiwan</Title>
        <TextWrapper>
          <Text>
            Please login and take your friends to lunch in your favorite place!
          </Text>
        </TextWrapper>
        <CardButton onClick={signIn}>
          <ImageButton src={GooglePNG} />
          Login with google
        </CardButton>
      </Content>
    </Container>
  )
}

export default Home
