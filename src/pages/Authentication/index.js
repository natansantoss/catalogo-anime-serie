import React, {  useState  } from 'react';
import {  Link, useHistory   } from 'react-router-dom';
import {  history  } from '../../history' //Importando History

import axios from 'axios';


import {
    BackgroundStyled,
    MaskBlackStyled,
    Container,

    RegisterStyled,
    ImageDetailStyled,
    TextDetaildStyled,
    InfoStyled,

    DescriptionStyled,
    TitleRegisterStyled,
    FormStyle,
    LabelStyled,
    ButtonStyled,
    LoginStyled,
    InputStyled,
    ErrorStyled
} from './styled.js'

function Register() {

    const[email, setEmail] = useState([])
    const[password, setPassword] = useState([])
    const[error, setError] = useState([])
    
    function getEmail(event) {
        var valueEmail = event.target.value
        setEmail(valueEmail)
    }
    function getPassword(event) {
        var valuePassword = event.target.value
        setPassword(valuePassword)
    }

    async function submit() {

        const res = await axios.post('http://localhost:3333/auth', {
            email,
            password,
        })

        const {  data  } =  res
        localStorage.setItem("token", data.token)

        const error = res.data.Error

        if(error){

            setError(error)
        }else{

            const idUser = res.data.user[0].id

            localStorage.setItem("name", res.data.user[0].name)
            localStorage.setItem("id_user", idUser)

            history.push('/home') //Utiliza função history para enviar o usuário a determinada pagina
        }

    }

    return(
        <BackgroundStyled>
            <Container>
                <RegisterStyled>
                    <TextDetaildStyled>
                        <TitleRegisterStyled>Fazer Login</TitleRegisterStyled>

                        <FormStyle>
                            <LabelStyled>E-Mail</LabelStyled>
                            <InputStyled type="email" onChange={getEmail}/>
                            <LabelStyled>Senha</LabelStyled>
                            <InputStyled type="password" onChange={getPassword}/>

                            <ButtonStyled>
                                <LoginStyled as={Link} to="/register">Criar Uma Conta</LoginStyled>
                                
                                <LoginStyled as={Link} onClick={submit}>Login</LoginStyled>
                            </ButtonStyled>
                            <ErrorStyled>{error}</ErrorStyled>

                        </FormStyle>
                    </TextDetaildStyled>
                    <ImageDetailStyled>
                        <MaskBlackStyled>
                            <InfoStyled>Bem-Vindo(a) Novamente.</InfoStyled>
                            <DescriptionStyled>
                                Mantenha seus Animes e Séries favoritos organizados e catalogados para consultar quando quiser...
                            </DescriptionStyled>
                        </MaskBlackStyled>
                    </ImageDetailStyled>
                </RegisterStyled>
            </Container>
        </BackgroundStyled>
    )
};

export default Register