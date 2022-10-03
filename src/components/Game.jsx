import { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Questions from './Questions'
import Footer from './Footer'


export default function Game({gameStart}) {

    return (
        <>
            {gameStart &&
                <>
                <Logo />
                <Questions />
                <Footer/>
                </>
            }
        </>
    )
}

