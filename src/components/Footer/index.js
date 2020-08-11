import React from 'react';

import {
    
    FooterStyled,
    ContentFooterStyled,
    AuthorStyled,
} from './styled'

function Anime () {
    return (
        <>
            <FooterStyled>
                <ContentFooterStyled>
                    <AuthorStyled href="https://github.com/natansantoss" target="_blank">Natan.Santos</AuthorStyled>
                </ContentFooterStyled>
            </FooterStyled>
        </>     
    )
}

export default Anime