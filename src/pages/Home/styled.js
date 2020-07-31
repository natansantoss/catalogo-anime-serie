import styled, { keyframes } from 'styled-components';

import Back from '../../assets/background.jpg'


const fade = keyframes `

    from {
        opacity: 1;
        transform: scale(1)
    }to {
        opacity: 0.18;
        transform: scale(1.1)
    }
`
const move = keyframes `

    from {

        transform: translateY(0%)
    }to {

        transform: translateY(-100%)
    }
`



export const ContentStyled = styled.div `

    background: URL(${Back});
    background-attachment: fixed;
    height: 620px;

    @media(max-width: 1080px){

        background-size: cover;
        background-position: top;
    }


`
export const MaskStyled = styled.div `

    width: 100%;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.8);

`


export const Container = styled.div `

    width: 100%;
    max-width: 1050px;

    display: flex;
    justify-content: space-between;



    @media(max-width: 1080px){
        
        text-align: center;

        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

`


export const ContentTextStyled = styled.div `

    max-width: 580px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-shadow: #000 0 0 7px;
    margin: 15px;

`
export const TitleStyled = styled.h1 `

    font-size: 4.0rem;
    font-weight: 900;
    text-shadow: #fff 0 0 7px;

    margin-bottom: 5px;

`
export const SinopseStyled = styled.p `

    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 3px;
    
`


export const ContentImageStyled = styled.div `
    
    h2{
        color: #fff;
        font-size: 1.3rem;
        text-shadow: #000 0 0 7px;
        margin-top: 5px;
    }

    @media(max-width: 1080px){
        
        order: -1
    }

`
export const ImageStyled = styled.img`

    width: 330px;
    border-radius: 10px;

    @media(max-width: 1080px){
        
        width: 250px
    }
    
`
export const InfoStyled = styled.div`

    display: flex;
    justify-content: space-between;

    margin-bottom: 5px;

    font-size: 1.0rem;

`


export const ListStyled = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const ContentListStyled = styled.div `

    width: 100%;
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 50px;

    @media(max-width: 755px){

        align-items: center;
    }
     
`

export const ListTypeStyled = styled.h2 `

    margin: 18px 0px;

    color: #fff;
    font-size: 1.6rem;
    font-weight: 800;
    text-shadow: #000 0 0 7px;
    text-transform: uppercase;

`
export const AllListStyled = styled.div `

    width: 100%;
   
`
export const ListAllStyled = styled.ul`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-template-rows: auto;
    grid-gap: 40px;
    justify-items: center;
    align-self: center;


    li{
        list-style: none;
    }
    
    li img{
        width: 180px;
        height: 250px;
        border-radius: 5px;

    }
    li img:hover{
        cursor: pointer;
        animation: ${fade} 0.4s forwards;
    }
    li img:hover + h3{

        animation-fill-mode: backwards;
        animation: ${move} 0.3s forwards;
        display: flex;
    }

    @media(max-width: 1200px){

        margin: 0px 50px;
    }

`
export const NameStyled = styled.h3 `

    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    text-shadow: #fff 0 0 7px;
    text-align: left;
    
`



export const FooterStyled = styled.div`
    
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background: #252830;
    
`
export const ContentFooterStyled = styled.div`

    width: 100%;
    max-width: 1050px;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    a:hover{
        animation: ${fade} 0.3s forwards;
        text-decoration: underline;
    }

`
export const AuthorStyled = styled.a`

    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    text-shadow: #000 0 0 7px;
    text-align: left;
    text-decoration: none;
`
