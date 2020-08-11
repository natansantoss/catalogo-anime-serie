import React from 'react';

import Button from '../Button';

import {
    HeaderStyled,
    Container,
    HomeStyled,
    NavStyled,
} from './styled'

function Header () {
    return (
        <>
            <HeaderStyled>
                <Container>
                    <HomeStyled>
                        <Button href="/" text="Home"/>
                    </HomeStyled>
                    <NavStyled>
                        <Button href="/anime" text="Animes"/>
                        <Button href="/serie" text="Series"/>
                    </NavStyled>
                </Container>
            </HeaderStyled>
        </>     
    )
}

export default Header