import React, {  useState  } from 'react';
import {  Link  } from 'react-router-dom';
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
} from './styled.js'

function Register() {

    const[name, setName] = useState([])
    const[email, setEmail] = useState([])
    const[password, setPassword] = useState([])
    
    function getName(event) {
        var valueName = event.target.value
        setName(valueName)
    }
    function getEmail(event) {
        var valueEmail = event.target.value
        setEmail(valueEmail)
    }
    function getPassword(event) {
        var valuePassword = event.target.value
        setPassword(valuePassword)
    }


    async function submit() {

        const res = await axios.post('http://localhost:3333/register', {
            name,
            email,
            password
        })

        const {  data  } =  res
        localStorage.setItem("token", data.token)
        
        const idUser = res.data.userCreated
        localStorage.setItem("id_user", idUser)

        localStorage.setItem("name_user", name)
        
    }

    return(
        <BackgroundStyled>
            <Container>
                <RegisterStyled>
                    <ImageDetailStyled>
                        <MaskBlackStyled>
                            <InfoStyled>Bem-Vindo(a).</InfoStyled>
                            <DescriptionStyled>
                                Mantenha seus Animes e Séries favoritos organizados e catalogados para consultar quando quiser...
                            </DescriptionStyled>
                        </MaskBlackStyled>
                    </ImageDetailStyled>
                    <TextDetaildStyled>
                        <TitleRegisterStyled>Cadastre-se</TitleRegisterStyled>

                        <FormStyle >
                            <LabelStyled>Nome</LabelStyled>
                            <InputStyled type="text" onChange={getName}/>
                            <LabelStyled>E-Mail</LabelStyled>
                            <InputStyled type="email" onChange={getEmail}/>
                            <LabelStyled>Senha</LabelStyled>
                            <InputStyled type="password" onChange={getPassword}/>

                            <ButtonStyled>
                                <LoginStyled as={Link} to="/">Já possuo uma conta</LoginStyled>
                                <LoginStyled as={Link} to="/home" onClick={submit}>Enviar</LoginStyled>
                            </ButtonStyled>

                        </FormStyle>
                    </TextDetaildStyled>
                </RegisterStyled>
            </Container>
        </BackgroundStyled>
    )
};

export default Register;