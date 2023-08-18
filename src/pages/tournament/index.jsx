import React, {useEffect, useState} from "react"
import CardsTournament from '../../../components/Tournaments/CardsTournament'

import moment from "moment"

import styled from "styled-components";

const Title = styled.h1`
  margin: 2em 0em;
  text-transform: uppercase;
  font-size: 40px;

  @media(max-width: 692px) {
    font-size: 35px;
  }

  @media(max-width: 521px) {
    font-size: 25px;
  }


  @media(max-width: 379px) {
    font-size: 20px;
  }
`;

const Span = styled.span`
  color: #EFA144;
`;

const Container = styled.div`
  height: calc(100% - 100px);
`;

const Content = styled.div`
  max-width: 88%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2em;
  padding: 3em 0em;
  overflow: hidden;

  @media(max-width: 1158px) {
    justify-content: center;
  }

  @media(max-width: 521px) {
    max-width: 100%;
  }
`;

export default function Tournament() {
  const date = moment().format('YYYY-MM-DD');
  const dateTournament = moment().format('DD/MM')

  const [categories, setCategories] = useState([])

  useEffect(() => {
      fetch(`https://api.pokerbyte.com.br/mtt/list/106/all/${date}/guaranteed/desc`)
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data.data);
        })
    }, [])

  return (
    <Container>
      <Title>grade de torneios <Span>{dateTournament}</Span></Title>
      <Content>
        {categories.map((tournament, index) => (
          <CardsTournament key={index} tournament={tournament}/>
        ))}
      </Content>
    </Container>
  )
}

