import styled from 'styled-components'
import logo from '../assets/images/logo.png'

export default function WelcomeScreen({gameStart, setGameStart}){
    return (
        <>
        <Screen gameStart={gameStart}>
            <img src={logo} alt='logo'></img>
            <h1>ZapRecall</h1>
            <button onClick={() => setGameStart(true)}>Iniciar Recall!</button>
        </Screen>
        </>
    )
}

const Screen = styled.div`
    display: ${(props) => props.gameStart ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    h1{
        margin: 30px;
        font-family: 'Righteous';
        font-size: 36px;
        color:#fff;
        letter-spacing: -0.012em;
    }
    button{
        font-family: 'Recursive';
        font-size: 18px;
        color: #D70900;
        background-color: #fff;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 70vw;
        height: 10vh;
    }
`