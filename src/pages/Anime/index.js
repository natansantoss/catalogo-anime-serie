import React, {  useState  } from 'react';
import {  Link  } from 'react-router-dom';
import axios from 'axios';


import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    PageStyled,
    Container,
    SearchStyled,
    InputSearchStyled,
    ButtonSearchStyled,
    InfoSearchStyled,

    ContentStyled,
    ContentInfoStyled,
    ListAnimeStyled,
    NameStyled,

} from './styled.js'

function Anime () {

    const [values, setvalues] = useState([])
    const [results, setResults] = useState([])

    function getValue(event) {
        var value = event.target.value

        setvalues(value)
    }

    async function getData() {
        const response = await axios(`https://api.jikan.moe/v3/search/anime?q=${values}`)
        setResults(response.data.results)
    }

    return(
        <>
            <Header />
                <PageStyled>
                    <Container>
                        <SearchStyled>
                            <InputSearchStyled placeholder="Search Anime" onChange={getValue}/>
                            <ButtonSearchStyled onClick={getData}>Search</ButtonSearchStyled>
                        </SearchStyled>
                        <InfoSearchStyled>Click para adicionar aos favoritos</InfoSearchStyled>
                        <ContentStyled>
                        <ListAnimeStyled>
                            {results.map((result) => {
                                return <li key={result.mal_id} >
                                            <ContentInfoStyled onClick={() => {

                                                axios.post("http://localhost:3333/create-animes", {
                                                    mal_id: result.mal_id,
                                                    title: result.title,
                                                    synopsis: result.synopsis,
                                                    image_url: result.image_url,
                                                    episodes: result.episodes,
                                                    score: result.score,
                                                    url: result.url
                                                })
                                            }}>

                                                <img src={result.image_url} alt={result.title} />
                                            </ContentInfoStyled>
                                            <NameStyled as={Link} to="/">{result.title}</NameStyled>
                                        </li>
                            })}
                        </ListAnimeStyled>
                        </ContentStyled>
                    </Container>
                </PageStyled>
            <Footer />
        </>
    )
}

export default Anime;