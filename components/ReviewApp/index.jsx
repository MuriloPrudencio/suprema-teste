import React from "react"
import { Container, Content, Security, ContainerSecurity, Title, Span, Paragraph, ImgArmor, Buttom } from "./style"
import Link from "next/link"

export default function ReviewApp () {
    return (
        <Container>
            <Content>
                <ContainerSecurity>
                    <Security src='/images/logos/security-1.png'/>
                    <Title>o seu jogo muito <Span>mais seguro</Span></Title>
                    <Paragraph>A segurança dos players sempre vem em 1º lugar!</Paragraph>
                    <Link href="">
                        <Buttom>
                            baixe o app agora
                        </Buttom>
                    </Link>
                </ContainerSecurity>
                <ImgArmor src='/images/escudo.png'/>
            </Content>
        </Container>
    )
}