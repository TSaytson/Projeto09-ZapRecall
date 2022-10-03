import { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Questions from './Questions'
import Footer from './Footer'
import questionsAndAnswers from '../assets/mock'


export default function Game({gameStart}) {
    const [answers, setAnswers] = useState(0);
    const length = questionsAndAnswers.length;
    return (
        <>
            {gameStart &&
                <>
                <Logo />
                <Questions />
                <Footer answers={answers} length={length}/>
                </>
            }
        </>
    )
}

