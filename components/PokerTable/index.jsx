import React from "react";
import { Container, Content ,Title, Paragraph, Span, Img, Figure } from "./style";

export default function PokerTable () {

  return (
    <Container>
        <Content>
            <Title>
            <Span>A</Span> maior liga b2b <Span>de poker do</Span> mundo
            </Title>
            <Paragraph>
              Vem pra Suprema Nós somos o poker!
            </Paragraph>
        </Content>
        <Figure>
          <Img src='/images/pokerTable.png' alt="Mesa de Poker"/>
        </Figure>
    </Container>

  )
}