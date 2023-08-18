import React, { useState, useEffect } from "react";
import {
  Item,
  Title,
  Container,
  SecondTitle,
  Download,
  CellPhoneTrunkImg,
  App,
  AppImg,
} from "./style";

import Link from "next/link";
import ButtonDownload from "../ButtonDownload";

const LiningHighDownload = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Altere esse valor conforme necessário
    };

    handleResize(); // Verificar o tamanho inicial da janela
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Container>
      <Item>
        <Title>Venha forrar na</Title>
        <SecondTitle>Maior liga</SecondTitle>
        <SecondTitle>De poker do</SecondTitle>
        <SecondTitle>Mundo</SecondTitle>
        <Download>
          <App>
            <ButtonDownload isMobile={isMobile} />
          </App>
        </Download>
      </Item>
      <CellPhoneTrunkImg src='/images/trunkSmart.png' alt="Smartphone com app aberto, ao lado um baú"></CellPhoneTrunkImg>
    </Container>
  );
};

export default LiningHighDownload;
