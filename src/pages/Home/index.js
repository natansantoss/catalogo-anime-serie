import React from 'react';

import {
    ContentStyled,
    ContentTextStyled,
    ContentImageStyled,
    Container,
    ImageStyled,
    TitleStyled,
    SinopseStyled,
    InfoStyled,
    MaskStyled,

    ListStyled,
    ListTypeStyled,
    AllListStyled,
    NameStyled,
    ContentListStyled,
    ListAllStyled,

    FooterStyled,
    ContentFooterStyled,
    AuthorStyled,
} from './styled.js'

import Visual from '../../assets/visual.jpg'

import A01 from '../../assets/list-animes/A01.jpg'
import A02 from '../../assets/list-animes/A02.jpg'
import A03 from '../../assets/list-animes/A03.jpg'
import A04 from '../../assets/list-animes/A04.jpg'
import A05 from '../../assets/list-animes/A05.jpg'
import A06 from '../../assets/list-animes/A06.jpg'

import S01 from '../../assets/list-animes/S01.jpg'
import S02 from '../../assets/list-animes/S02.jpg'
import S03 from '../../assets/list-animes/S03.jpg'
import S04 from '../../assets/list-animes/S04.jpg'
import S05 from '../../assets/list-animes/S05.jpg'
import S06 from '../../assets/list-animes/S06.jpg'


function Home () {
    return (
        <>
            <ContentStyled>
                <MaskStyled>

                    <Container>

                        <ContentTextStyled>
                            <TitleStyled>Great Pretender</TitleStyled>
                            <SinopseStyled>Edamura Masato é supostamente o maior vigarista do Japão. Juntamente com seu parceiro Kudo, eles tentam enganar um francês em Asakusa, mas inesperadamente eles é que são enganados. O francês em questão acaba por ser Laurent Thierry - um "homem de confiança" de nível muito mais alto no controle da máfia. Edamura ainda está para descobrir que destino o espera, depois de se envolver nos trabalhos sujos do francês.</SinopseStyled>
                        </ContentTextStyled>

                        <ContentImageStyled>
                            <ImageStyled src={Visual} alt="Great Pretender" />
                            <InfoStyled>
                                <h2>Tipo: Anime</h2>
                                <h2>Episódios: 23</h2>
                            </InfoStyled>
                        </ContentImageStyled>

                    </Container>

                </MaskStyled>
            </ContentStyled>

            <ListStyled>
                <ContentListStyled>

                    <ListTypeStyled>Animes</ListTypeStyled>
                    
                    <AllListStyled>
                        <ListAllStyled>
                            <li>
                                <img src={A01} alt="Great Pretender" />
                                <NameStyled>Great Pretender</NameStyled>
                            </li>
                            <li>
                                <img src={A02} alt="Code Geass" />
                                <NameStyled>Code Geass</NameStyled>
                            </li>
                            <li>
                                <img src={A03} alt="Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e" />
                                <NameStyled>Youkoso Jitsuryoku Shijou Shugi no <br/> Kyoushitsu e</NameStyled>
                            </li>
                            <li>
                                <img src={A04} alt="Death Note" />
                                <NameStyled>Death Note</NameStyled>
                            </li>
                            <li>
                                <img src={A05} alt="Kaguya-sama wa Kokurasetai" />
                                <NameStyled>Kaguya-sama wa Kokurasetai</NameStyled>
                            </li>
                            <li>
                                <img src={A06} alt="No Game No Life" />
                                <NameStyled>No Game No Life</NameStyled>
                            </li>
                        </ListAllStyled>
                    </AllListStyled>

                </ContentListStyled>

                <ContentListStyled>

                    <ListTypeStyled>Séries</ListTypeStyled>
                    
                    <AllListStyled>
                        <ListAllStyled>
                            <li>
                                <img src={S01} alt="Supernatural" />
                                <NameStyled>Supernatural</NameStyled>
                            </li>
                            <li>
                                <img src={S02} alt="Mr. Robot" />
                                <NameStyled>Mr. Robot</NameStyled>
                            </li>
                            <li>
                                <img src={S03} alt="You" />
                                <NameStyled>You</NameStyled>
                            </li>
                            <li>
                                <img src={S04} alt="The Umbrella Academy" />
                                <NameStyled>The Umbrella Academy</NameStyled>
                            </li>
                            <li>
                                <img src={S05} alt="Peaky Blinders" />
                                <NameStyled>Peaky Blinders</NameStyled>
                            </li>
                            <li>
                                <img src={S06} alt="Dark" />
                                <NameStyled>Dark</NameStyled>
                            </li>
                        </ListAllStyled>
                    </AllListStyled>

                </ContentListStyled>
            </ListStyled>

            <FooterStyled>
                <ContentFooterStyled>
                    <AuthorStyled href="https://github.com/natansantoss" target="_blank">Natan.Santos</AuthorStyled>
                </ContentFooterStyled>
            </FooterStyled>
        </>     
    )
}

export default Home