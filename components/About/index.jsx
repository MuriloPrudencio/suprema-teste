import React from 'react'
import { AboutContent, Container, Content, Img, Logo, Paragraph } from './style'

export default function Sobre() {
  return (
    <Container>
      <Content>
        <Img src='/images/logos/ilustraAbout.png'/>
        <AboutContent>
          <Logo src='/images/logos/logoAbout.png'/>
          <Paragraph>
          Desde 2018, a Suprema Poker conta com várias modalidades, por exemplo: NHL – jogo tradicional com duas cartas; e PLO – 
          jogo com quatro ou cinco cartas, além de outras que viraram a febre do poker online da atualidade.
          </Paragraph>
          <Paragraph>
          Os torneios são de R$ 1 a R$ 10 mil; e os Ring Games a partir de R$ 4. As premiações são de acordo com as modalidades, 
          por isso o total de inscritos varia de 15% ou 20%. Para participar o jogador precisa baixar o nosso aplicativo aqui, e 
          dessa forma pode jogar através de computadores, celulares e tablets.Somos a maior liga de poker, por isso temos o maior 
          numero de clubes associados. São 381 clubes, tendo um número altíssimo de jogadores ativos por semana, e mais de 160 mil 
          jogadores espalhados por 70 paises. Começamos no maior PIB da américa latina, e aos poucos a Suprema Poker expandiu o 
          esporte para todos os cantos do país. Onde tiver um amante do poker nós estaremos ali.Formamos primeiramente uma base sólida, 
          planejamos cada passo da extensão, fizemos parceiros e construímos laços. Dessa forma, o resultado só poderia ser um: o sucesso 
          atual que atingimos.
          </Paragraph>
          <Paragraph>
          Nós somos o poker!
          </Paragraph>
        </AboutContent>
      </Content>
    </Container>
  )
}
