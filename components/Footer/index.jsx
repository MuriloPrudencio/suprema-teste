import React from 'react'
import { Container } from './style'
import Duvidas from './DoubtsFooter'
import Navigation from './NavFooter'
import Copy from './CopyFooter'

export default function Footer () {
    return (
        <Container>
            {/* <Duvidas/> */}
            <Navigation/>
            <Copy/>
        </Container>
    )
}