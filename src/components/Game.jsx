import { useState } from 'react'
import Logo from './Logo'
import Zaps from './Zaps'
import Footer from './Footer'
import questionsAndAnswers from '../assets/mock'


export default function Game({gameStart}) {
    const [answers, setAnswers] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [zapInProgress, setZapInProgress] = useState(false);
    const length = questionsAndAnswers.length;
    console.log('answers:', answers);

    return (
        <>
            {gameStart &&
                <>
                <Logo />
                <Zaps 
                disabled={disabled}
                setDisabled={setDisabled}
                zapInProgress={zapInProgress}
                setZapInProgress={setZapInProgress}
                />
                <Footer 
                answers={answers}
                setAnswers={setAnswers}
                length={length}
                disabled={disabled}
                setDisabled={setDisabled}
                setZapInProgress={setZapInProgress}
                />
                </>
            }
        </>
    )
}

