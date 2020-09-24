import React, { FC, useContext, useState } from 'react'
import { Container, Image, TextWrapper, ImageButton } from './styled'
import { ThemeContext } from 'styled-components'
import { Theme } from 'utils/theme'
import {
  useGoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import TrophyPNG from 'assets/trophy.png'
import GooglePNG from 'assets/google.png'
import { Subtitle, Title, Text } from 'components/UI/Texts'
import { Button, CardButton } from 'components/UI/Buttons'
import Options from 'components/Options'

const OPTIONS = [
  'China Taiwan',
  '083 Burguer',
  'Matterello',
  'Mc Donalds',
  'Waffle House',
  'Aquarius Restaurante',
  'Picanha do Bastos',
  'Sal e Brasa',
  'Taberna Restaurante',
  'Dosha Temakeria',
  'Hao',
  'The W',
]

const Home: FC = () => {
  const theme = useContext<Theme>(ThemeContext)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [voted, setVoted] = useState<boolean>(false)
  const [currentOption, setCurrentOption] = useState<string>('')

  const onLogin = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): void => {
    console.log(response)
    setLoggedIn(true)
  }
  const { signIn } = useGoogleLogin({
    onSuccess: onLogin,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    scope: 'profile',
  })

  const _renderTextMessage = () => {
    if (voted) {
      return 'Thank you for voting!'
    }
    if (loggedIn) {
      return 'Vote in your favorite place!'
    }
    return 'Please login and take your friends to lunch in your favorite place!'
  }

  const handleVote = () => {
    if (!voted) {
      setVoted(true)
    }
  }

  return (
    <Container>
      <Subtitle color={theme.colors.primary}>Last resturant selected</Subtitle>
      <Subtitle>21/09/2020</Subtitle>
      <Image src={TrophyPNG} />
      <Title>China Taiwan</Title>
      <TextWrapper>
        <Text>{_renderTextMessage()}</Text>
      </TextWrapper>
      {loggedIn ? (
        <>
          <Options
            options={OPTIONS}
            currentOption={currentOption}
            selectOption={setCurrentOption}
            voted={voted}
          />
          <Button
            disabled={voted}
            onClick={handleVote}
            textColor={theme.colors.white}
            bgColor={voted ? theme.colors.success : theme.colors.primary}>
            Vote!
          </Button>
        </>
      ) : (
        <CardButton onClick={signIn}>
          <ImageButton src={GooglePNG} />
          Login with google
        </CardButton>
      )}
    </Container>
  )
}

export default Home
