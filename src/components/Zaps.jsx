import styled from "styled-components";
import questionsAndAnswers from '../assets/mock'
import Zap from "./Zap";


export default function Zaps({disabled, setDisabled, zapInProgress, setZapInProgress}) {

    return (
        <>
            <ContainerZaps>
                <ul>
                    {questionsAndAnswers.map((item, index) =>
                        <Zap key={index} 
                        item={item} 
                        index={index}
                        disabled={disabled}
                        setDisabled={setDisabled}
                        zapInProgress={zapInProgress}
                        setZapInProgress={setZapInProgress}
                        />
                    )}
                </ul>
            </ContainerZaps>
        </>
    )
}

const ContainerZaps = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    max-height: 350px;
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
`