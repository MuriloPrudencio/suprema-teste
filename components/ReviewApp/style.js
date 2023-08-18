import styled from "styled-components"

export const Container = styled.div`
    background-color: #2C2C2C;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5em 0em;
`;

export const Content = styled.div`
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    @media(max-width: 1533px) {
        justify-content: center;
        gap: 5em;
    }
`;

export const ContainerSecurity = styled.div`
    width: 50%;
    text-align: justify;

    @media(max-width: 1533px) {
        width: 80%;
    }

    @media (max-width: 829px){
        width: 90%;
    }
`;

export const Security = styled.img`
    @media (max-width: 829px){
        width: 60%;
    }
`;

export const Title = styled.h2`
    width: 70%;
    text-align: left;
    font-family: 'REM', sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;

    @media(max-width: 667px) {
        font-size: 25px;
    }

    @media(max-width: 466px) {
        width: width: 91%;
        font-size: 20px;
        margin-top: .5em;
    }
`;

export const Span = styled.span`
    color: #EFA144;
`;

export const Paragraph = styled.p`
    width: 70%;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1.8em;

    @media(max-width: 466px) {
        margin-top: .5em;
    }
`;

export const ImgArmor = styled.img`
    @media (max-width: 829px){
        width: 70%;
    }
`;

export const Buttom = styled.a`
    background-color: #EFA144;
    padding: .5em;
    border-radius: 5px;
    color: #000;
    font-weight: bold;
    text-transform: uppercase;

    &:hover{
        background-color: #ca8734;
    }
`;