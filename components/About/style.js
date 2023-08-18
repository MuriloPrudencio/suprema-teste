import styled from "styled-components";

export const Container = styled.div`
  width: 88%;
  height: 100%;
`;

export const Content = styled.div`
  margin: 2em 0em;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: space-around;
`;

export const Img = styled.img`
  width: 480px;
  float: left;
`;

export const AboutContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 253px;
  margin: 1.5em 0em;
`;

export const Paragraph = styled.p`
  text-align: justify;
  margin: .5em 0em;
`;
