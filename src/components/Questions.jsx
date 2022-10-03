import { useState } from "react";
import styled from "styled-components";
import questionsAndAnswers from '../assets/mock'
import play from '../assets/images/seta_play.png'
import turn from '../assets/images/seta_virar.png'

export default function Questions() {
    const [questions, setQuestions] = useState(questionsAndAnswers);

    const [showZap, setShowZap] = useState(false);
    const [rotate, setRotate] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    function changeZap(){
        if (!showZap){
            setShowZap(true);
            setRotate(!rotate);
        }
        else if (!showAnswer){
            setRotate(!rotate);
            setShowAnswer(true);
        }
    }


    return (
        <>
            <ContainerQuestions 
            rotate={rotate} 
            showZap={showZap}
            showAnswer={showAnswer}
            >
                <ul>
                    {questions.map((item, index) =>
                        <li key={index}>
                            <p>{!showZap ?
                                `Pergunta ${index + 1}` :
                                showAnswer ? `${item.answer}` :
                                    `${item.question}`}
                            </p>
                            <img onClick={() => changeZap()}
                                src={showZap ? turn : play} />
                        </li>
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
        background-color: ${(props) => props.showZap ? '#ffffd4' : '#fff'};
        width: 300px;
        height: ${(props) => props.showZap ? '150px' : '65px'};
        justify-content: space-between;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        margin-bottom: 25px;
        transition: all 0.5s;
        backface-visibility: hidden;
        transform: ${(props) => props.rotate ? 'rotateY(360deg)' : 'rotateY(0)'};
    }
    ul li p{
        transition: all 0.5s;
        margin-bottom: ${(props) => props.showZap ? '100px' : '0'};
        margin-left: 15px;
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
    }
    ul li img{
        display: ${(props) => (props.showZap && props.showAnswer) ? 'none': 'block'};
        transition: all 0.5s;
        margin-top: ${(props) => props.showZap ? '100px' : '0'};
        margin-right: 15px;
        cursor: pointer;
    }
`