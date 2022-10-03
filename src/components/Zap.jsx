import { useState } from 'react'
import styled from 'styled-components';
import play from '../assets/images/seta_play.png'
import turn from '../assets/images/seta_virar.png'

export default function Zap({ item, index, disabled, setDisabled, zapInProgress, setZapInProgress }) {

    const [showZap, setShowZap] = useState(false);
    const [rotate, setRotate] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    function changeZap() {
        if (!zapInProgress || showZap) {
            if (!showZap && disabled) {
                setZapInProgress(true);
                setShowZap(true);
                setRotate(!rotate);
            }
            else if (!showAnswer) {
                setRotate(!rotate);
                setShowAnswer(true);
                setDisabled(false);
            }
        }
    }

    return (
        <>
            <List rotate={rotate} showZap={showZap} showAnswer={showAnswer}>
                <p>
                    {(!showZap) ?
                        `Pergunta ${index + 1}` :
                        showAnswer ? `${item.answer}` :
                            `${item.question}`}
                </p>
                <img onClick={() => changeZap()}
                    src={showZap ? turn : play} />
            </List>
        </>

    )
}

const List = styled.li`
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
    p{
    transition: all 0.5s;
    margin-bottom: ${(props) => props.showZap ? '100px' : '0'};
    margin-left: 15px;
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    }
    img{
    display: ${(props) => (props.showZap && props.showAnswer) ? 'none' : 'block'};
    transition: all 0.5s;
    margin-top: ${(props) => props.showZap ? '100px' : '0'};
    margin-right: 15px;
    cursor: pointer;
    }
`