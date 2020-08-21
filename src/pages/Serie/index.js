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
    ListStyled,
    NameStyled,

} from './styled.js'

function Serie () {

    const idUser = localStorage.getItem('id_user')

    const [results, setResults] = useState([])
    const [values, setvalues] = useState([])

    function getValue(event) {
        var value = event.target.value

        setResults(value)
    }

    async function getData() {
        const response = await axios(`https://www.episodate.com/api/search?q=${results}`)
        setvalues(response.data.tv_shows)
    }

    return(
        <>
            <Header />
                <PageStyled>
                    <Container>
                        <SearchStyled>
                            <InputSearchStyled placeholder="Search Serie" onChange={getValue}/>
                            <ButtonSearchStyled onClick={getData}>Search</ButtonSearchStyled>
                        </SearchStyled>
                        <InfoSearchStyled>Click para adicionar aos favoritos</InfoSearchStyled>
                        <ContentStyled>
                        <ListStyled>
                            {values.map((value) => {
                                return <li key={value.id}>
                                            <ContentInfoStyled onClick={() => {
                                                
                                                axios.post("http://localhost:3333/create-series", {
                                                    name: value.name,
                                                    image_thumbnail_path: value.image_thumbnail_path,
                                                    id: value.id,
                                                    user_id: idUser
                                                })

                                            }}>
                                                <img src={value.image_thumbnail_path} alt={value.name} />
                                            </ContentInfoStyled>
                                            <NameStyled as={Link} to="/">{value.name}</NameStyled>
                                        </li>
                            })}
                        </ListStyled>
                        </ContentStyled>
                    </Container>
                </PageStyled>
            <Footer />
        </>
    )
}

export default Serie;