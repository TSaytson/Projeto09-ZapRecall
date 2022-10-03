import styled from "styled-components"
import colors from "../assets/colors"

function Button(props){
    const buttonStyle = {
        borderRadius: '5px',
        backgroundColor: props.color,
        fontFamily:'Recursive',
        fontSize: '12px',
        color:'#fff',
        height: '6vh',
        width: '22vw',
        marginRight: '8px',
        border: '0.5px'
    }

    return(
        <button style={buttonStyle}>{props.children}</button>
    )
}

export default function Footer(){
    return (
        <>
            <ContainerFooter>
                <div>
                    <Button color={colors.vermelho}>Não lembrei</Button>
                    <Button color={colors.amarelo}>Quase não lembrei</Button>
                    <Button color={colors.verde}>Zap!</Button>
                </div>
                <h1>0/4 Concluídos</h1>

            </ContainerFooter>
        </>
    )
}

const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom:0;
    background-color: #fff;
    width: 100vw;
    height: 30vw;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1{
        width: 145px;
        height: 20px;
        font-family: 'Recursive';
        font-size: 18px;
        color: #333;
    }
`