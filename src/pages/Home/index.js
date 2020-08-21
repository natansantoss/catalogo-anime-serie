import React, {  useState, useEffect  } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    
    ContentStyled,
    ContentTextStyled,
    ContentImageStyled,
    Container,
    ImageStyled,
    TitleStyled,
    SinopseStyled,
    MaskStyled,

    ListStyled,
    ListTypeStyled,
    AllListStyled,
    ComandStyled,
    NameStyled,
    ButtonDeleteStyled,
    ContentListStyled,
    ListAllStyled,

} from './styled.js'

function Home () {

    const idUser = localStorage.getItem('id_user')
    const nameUser = localStorage.getItem('name')

    const [animesResults, setAnimesResults] = useState([])
    const [seriesResults, setSeriesResults] = useState([])
    const [value, setValue] = useState({
    
        "title": `Bem-Vindo(a)`,
    })

    useEffect(() => {

        async function getData() {
            const responseAnimes = await axios.get(`http://localhost:3333/animes?user_id=${idUser}`)
            setAnimesResults(responseAnimes.data)


            const responseSeries = await axios.get(`http://localhost:3333/series?user_id=${idUser}`)
            setSeriesResults(responseSeries.data)
        }

        getData()
    }, [])

    return (
        <>
            <Header />
            
            <ContentStyled>
                <MaskStyled>

                    <Container>

                        <ContentTextStyled>
                            <TitleStyled>{value.title}</TitleStyled>
                            <SinopseStyled>{value.synopsis}</SinopseStyled>
                        </ContentTextStyled>
                        <ContentImageStyled>
                            <ImageStyled src={value.image} alt={value.image} />
                        </ContentImageStyled>

                    </Container>

                </MaskStyled>
            </ContentStyled>

            <ListStyled>
                <ContentListStyled>

                    <ListTypeStyled>Animes Favoritos</ListTypeStyled>
                    
                    <AllListStyled>
                        <ListAllStyled> 
                            {animesResults.map((animesResult) => {
                                return(
                                    <li key={animesResult.id} >

                                        <img 
                                            src={animesResult.image} 
                                            alt={animesResult.title}

                                            onClick={async () => {
                                                var response = await axios.get("http://localhost:3333/anime", {
                                                    params: {
                                                        mal_id: animesResult.mal_id,
                                                    }
                                                })

                                                setValue(response.data[0])
                                            }}
                                        />
                                        <ComandStyled>
                                            <NameStyled>{animesResult.title}</NameStyled>
                                            <ButtonDeleteStyled

                                                onClick={() => {
                                                    
                                                    axios.delete("http://localhost:3333/del-animes", {
                                                        params: {
                                                            mal_id: animesResult.mal_id,
                                                            user_id: idUser
                                                        }
                                                    })
                                                }}
                                            >
                                                X
                                            </ButtonDeleteStyled>
                                        </ComandStyled>
                                        
                                    </li>
                                )
                            })}

                        </ListAllStyled>
                    </AllListStyled>

                </ContentListStyled>

                <ContentListStyled>

                    <ListTypeStyled>Séries Favoritas</ListTypeStyled>
                    
                    <AllListStyled>
                        <ListAllStyled>
                            {seriesResults.map((seriesResult) => {
                                    return(
                                        <li key={seriesResult.id_db} >

                                            <img 
                                                src={seriesResult.image_thumbnail_path} 
                                                alt={seriesResult.name} 

                                                onClick={async () => {
                                                    var response = await axios.get("http://localhost:3333/serie", {
                                                        params: {
                                                            id: seriesResult.id,
                                                            user_id: idUser
                                                        }
                                                    })
    
                                                    var objSerie = {
                                                        "image": response.data[0].image_thumbnail_path,
                                                        "title": response.data[0].name,
                                                        "synopsis": "Not Found",
                                                        "episodes": "Not Found",
                                                        "score": "Not Found"

                                                    }
                                                    setValue(objSerie)
                                                }}
                                            />
                                            <ComandStyled>
                                                <NameStyled>{seriesResult.name}</NameStyled>
                                                <ButtonDeleteStyled

                                                    onClick={() => {
                                                        
                                                        axios.delete("http://localhost:3333/del-series", {
                                                            params: {
                                                                id: seriesResult.id,
                                                            }
                                                        })
                                                    }}
                                                >
                                                    X
                                                </ButtonDeleteStyled>
                                            </ComandStyled>
                                        </li>
                                    )
                                })}
                        </ListAllStyled>
                    </AllListStyled>

                </ContentListStyled>
            </ListStyled>

            <Footer />
        </>
    )
}

export default Home