import styled from "styled-components"
import colors from "../assets/colors"

function Button({color, disabled, children, verifyZap}){
    const buttonStyle = {
        borderRadius: '5px',
        backgroundColor: color,
        fontFamily:'Recursive',
        fontSize: '12px',
        color:'#fff',
        height: '6vh',
        width: '22vw',
        marginRight: '8px',
        border: '0.5px',
        cursor: disabled ? 'not-allowed' : 'pointer'
    }

    return(
        <button onClick={verifyZap} style={buttonStyle}>{children}</button>
    )
}

export default function Footer({answers, setAnswers, length, disabled, setDisabled, setZapInProgress}){

    function verifyZap(){
        console.log('disabled', disabled);
        if (!disabled){
            console.log('entrou no verifyZap');
            setAnswers(answers+1);
            setDisabled(true);
            setZapInProgress(false);
        }
    }
    return (
        <>
            <ContainerFooter>
                <div>
                    <Button color={colors.vermelho} disabled={disabled} verifyZap={verifyZap}>
                        Não lembrei
                    </Button>
                    <Button color={colors.amarelo} disabled={disabled} verifyZap={verifyZap}>
                        Quase não lembrei
                    </Button>
                    <Button color={colors.verde} disabled={disabled} verifyZap={verifyZap}>
                        Zap!
                    </Button>
                </div>
                <h1>{answers}/{length} Concluídos</h1>

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