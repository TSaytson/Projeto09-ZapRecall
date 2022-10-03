import styled from "styled-components";
import questionsAndAnswers from '../assets/mock'

export default function Questions() {
    return (
        <>
            <ContainerQuestions>
                <ul>
                    {questionsAndAnswers.map((item, index) =>
                        <li key={index}><p>Pergunta {index + 1}</p><ion-icon name="play-outline"></ion-icon></li>
                    )}
                </ul>
            </ContainerQuestions>
        </>
    )
}

const ContainerQuestions = styled.div`
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
    ul li{
        display: flex;
        align-items: center;
        background-color: #fff;
        width: 300px;
        height: 65px;
        justify-content: space-between;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-bottom: 25px;
    }
    ul li p{
        margin-left: 15px;
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
    }
    ul li ion-icon{
        font-size: 25px;
        margin-right: 15px;
    }
`