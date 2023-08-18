import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: calc(100% - 100px);
`;

const Content = styled.div`
    max-width: 88%;

    @media(max-width: 650px) {
        max-width: 100%;
    }
`;

const Iframe = styled.iframe`
    width: 100%;
    height: calc(1170px - 100px);
    position: relative;
    overflow-y: hidden;
    border-radius: 40px;
    margin: 2em 0em;
    border: none;
`;

export default function Ranking () {
    return (
        <Container>
            <Content>
                <Iframe width="100%" height="100%"  frameborder="0" scrolling="no" src="https://pokerbyte.com.br/report/rankingSeries"/>
            </Content>
        </Container>
    )
}