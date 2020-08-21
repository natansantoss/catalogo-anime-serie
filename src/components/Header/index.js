import React from 'react';
import {  Link  } from 'react-router-dom';

import Button from '../Button';

import {
    HeaderStyled,
    LogoutStyled,
    Container,
    HomeStyled,
    NavStyled,
} from './styled'

function Header () {

    async function logout() {

        localStorage.removeItem("id_user")
        localStorage.removeItem("name")
        
    }

    return (
        <>
            <HeaderStyled>
                <Container>
                    <NavStyled>
                        <Button href="/home" text="Home"/>
                        <Button href="/anime" text="Animes"/>
                        <Button href="/serie" text="Series"/>
                    </NavStyled>
                    <HomeStyled>
                        <LogoutStyled as={Link} to="/" onClick={logout}>Logout</LogoutStyled>
                    </HomeStyled>
                </Container>
            </HeaderStyled>
        </>     
    )
}

export default Header