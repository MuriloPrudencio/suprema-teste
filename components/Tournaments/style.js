import styled from "styled-components"

export const Container = styled.div`
    background-image: url(/images/bg-mesas.png) ;
    background-position: center center;
    background-repeat:  no-repeat;
    background-size:  cover;
    width: 100%;
    height: 100%;
    margin-top: 2em;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    overflow:hidden;

    @media(max-width: 1587px) {
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
    }

    @media(max-width: 1167px) {
        border-top-left-radius: 5%;
        border-top-right-radius: 5%;
    }
`;

export const Content = styled.div`
    max-width: 88%;

    @media(max-width: 521px) {
        max-width: 100%;
    }
`;

export const Title = styled.h2`
    font-size: 66px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    font-family: 'REM', sans-serif;
    margin: 1.3em 0em;

    @media(max-width: 1587px) {
        font-size: 45px;
    }

    @media(max-width: 1077px) {
        font-size: 40px;
    }

    @media(max-width: 895px) {
        font-size: 35px;
    }

    @media(max-width: 637px) {
        font-size: 33px;
    }

    @media(max-width: 556px) {
        font-size: 28px;
    }

    @media(max-width: 456px) {
        font-size: 20px;
    }
`;

export const Span = styled.span`
    color: #EFA144;
`;

export const Paragraph = styled.p`
    @media(max-width: 456px) {
        font-size: 12px;
    }
`;

export const ContentTitle = styled.div`
    width: 45%;

    @media(max-width: 1529px) {
        width: 55%;
    }

    @media(max-width: 1469px) {
        width: 60%;
    }

    @media(max-width: 1354px) {
        width: 65%;
    }

    @media(max-width: 1247px) {
        width: 70%;
    }

    @media(max-width: 1150px) {
        width: 75%;
    }

    @media(max-width: 1078px) {
        width: 75%;
    }
`;

export const Buttom = styled.a`
    background-color: #EFA144;
    padding: .5em;
    border-radius: 5px;
    color: #000;
    font-weight: bold;

    &:hover{
        background-color: #ca8734;
    }
`;

export const ContainerButtom = styled.div`
    margin: 5em 0em;
`