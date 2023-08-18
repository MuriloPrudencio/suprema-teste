import React from "react";
import { Ancora, Container, ContainerMidias, Content, Explication, Midias, Nav, Navigator, Networks, Policy, SubTitle, Img, Download, App, AppImg } from "./style";
import Link from "next/link";

export default function Navigation () {

    return (
        <Container>
            <Content>
                <Nav>
                    <Navigator>
                        <Link href="/">
                            <Ancora >HOME</Ancora>
                        </Link>
                        <Link href="tournament">
                            <Ancora>TORNEIOS</Ancora>
                        </Link>
                        <Link href="ranking">
                            <Ancora>RANKING</Ancora>
                        </Link>
                        <Link href="onboard">
                            <Ancora>SUPREMA 5 ANOS</Ancora>
                        </Link>
                    </Navigator>

                    {/* <Explication>
                        <Link href=''>
                            <Ancora>
                                como jogar
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                regras de poker
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                regulamento geral
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                regras jackpot
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                regras da marca
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                software proíbido
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                regras das salas
                            </Ancora>
                        </Link>
                    </Explication>

                    <Policy>
                        <Link href=''>
                            <Ancora>
                                termos gerais
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                política de privacidade
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                preferências de privacidade
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                jogo responsavel
                            </Ancora>
                        </Link>
                        <Link href=''>
                            <Ancora>
                                ajuda
                            </Ancora>
                        </Link>
                    </Policy> */}
                </Nav>
                <Networks>
                    <ContainerMidias>
                        <SubTitle>
                            siga-nos nas redes sociais
                        </SubTitle>

                        <Midias>
                            <Link href='https://www.facebook.com/Supremabrazil'>
                                <Img src='/images/icons/facebook.png' alt='facebook suprema'/>
                            </Link>
                            <Link href='https://www.instagram.com/supremabrazil/'>
                                <Img src='/images/icons/insta.png' alt='instagram suprema'/>
                            </Link>
                            <Link href='https://www.linkedin.com/company/supremagaming'>
                                <Img src='/images/icons/in.png' alt='linkedin suprema'/>
                            </Link>
                            <Link href='https://www.tiktok.com/@supremagamingco'>
                                <Img src='/images/icons/tiktok.png' alt='tik tok suprema'/>
                            </Link>
                            <Link href='https://twitter.com/Supremabrazil'>
                                <Img src='/images/icons/twt.png' alt='twitter/x suprema'/>
                            </Link>
                        </Midias>
                    </ContainerMidias>
                    <Download>
                        <SubTitle>
                            baixe o app
                        </SubTitle>
                        <App>
                            <Link href='https://play.google.com/store/apps/details?gl=US&hl=pt_BR&id=com.opt.supremapoker&ut[…]p_emkt_1mbattlehr_1608&utm_medium=email&utm_source=RD+Station'>
                                <AppImg src='/images/icons/playStore.png' alt=''/>
                            </Link>
                            <Link href='https://apps.apple.com/br/app/suprema-poker/id1583176410'>
                                <AppImg src='/images/icons/appleStore.png' alt=''/>
                            </Link>
                            <Link href='https://www.supremapoker.net/download/supremapoker.exe'>
                                <AppImg src='/images/icons/windows.png' alt=''/>
                            </Link>
                        </App>
                    </Download>
                </Networks>
            </Content>
        </Container>
    )
    
}