import styled from "styled-components";

export const Container = styled.div`
  width: 100%; 
  height: calc(100% - 100px);

  @media(max-width: 749px) {
    width: 100%;
  }
`;

export const ContainerSlide = styled.div`
  width: 88%; 

  @media(max-width: 650px) {
    width: 100%;
  }
`

export const Content = styled.div`
  height: 100%;
  padding-top: 20px;
`;

export const Slider = styled.div`
  width: 100%;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Img = styled.img``;

export const ChipsOne = styled.img`
  width: 100px;
  position: absolute;
  left: 0;

  @media(max-width: 800px){
    width: 60px;
  }
`;

export const ContainerChips = styled.div`
  margin: 15%;

  @media(max-width: 1117px){
    margin: 23%;
  }

  @media(max-width: 723px){
    margin: 10%;
  }
`;

export const ChipsTwo = styled.img`
  width: 80px;
  position: absolute;
  right: 0;

  @media(max-width: 800px){
    width: 50px;
  }
`;

export const ChipsThree = styled.img`
  position: relative;
  top: 7em;
  left: 7em;
  width: 120px;

  @media(max-width: 800px){
    width: 60px;
    top: 4em;
    left: 3em;
  }
`;


