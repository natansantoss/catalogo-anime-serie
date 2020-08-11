import React from 'react';
import {  Link  } from 'react-router-dom';

import {
    
    ButtonAnimeStyled,

} from './styled'

function Button (props) {
    return (
        <>
            <ButtonAnimeStyled as={Link} to={props.href} target={props.target}>{props.text}</ButtonAnimeStyled>
        </>     
    )
}

export default Button;