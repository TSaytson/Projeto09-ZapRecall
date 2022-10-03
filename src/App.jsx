import { useState } from 'react'
import styled from 'styled-components'
import GlobalFonts from './fonts/fonts'
import ResetCss from './ResetCss'
import WelcomeScreen from './components/WelcomeScreen'
import Game from './components/Game'

function App() {
  const [gameStart, setGameStart] = useState(false);

  return (
    <Wrapper>
      <ResetCss/>
      <GlobalFonts/>
      <WelcomeScreen gameStart={gameStart} setGameStart={setGameStart}/>
      <Game gameStart={gameStart}/>

    </Wrapper>    
  )
}

export default App

const Wrapper = styled.div`
    background-color: #FB6B6B;
    height: 100vh;
    width: 100vw;
`