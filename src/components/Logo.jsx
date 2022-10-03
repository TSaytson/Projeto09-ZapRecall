import styled from 'styled-components'
import logo from '../assets/images/logo.png'

export default function Logo() {
    return (
        <ContainerLogo>
            <div>
                <img src={logo} alt='logo'></img>
                <h1>ZapRecall</h1>
            </div>
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        display: flex;
        align-items: center;
        margin-top: 45px;
    }
    div img{
        height: 60px;
        width: 52px;
        margin-right: 20px;
    }
    div h1{
        font-family: 'Righteous';
        color:#fff;
        font-size: 36px;
        letter-spacing: -0.012em;
    }

`