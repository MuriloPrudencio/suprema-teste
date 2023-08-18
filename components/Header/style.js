import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 2px solid #2C2C2C;

  @media (max-width: 1300px){
    padding: 15.55px 0px;
    flex-direction: row-reverse;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 1300px) {
    flex-direction: column;
    background-color: #000;
    position: fixed;
    height: 100%;
    z-index: 10;

    gap: 0px;
    top: 0px;
    left: 0px;
    width: 250px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 150px;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 13px;
  height: 90px;
  transition: 0.2s;
  cursor: pointer;
  
  &.active {
    border-bottom: 5px solid #EFA144;
    height: calc(90px + 5px);
    font-weight: bold;
  }

  @media (min-width: 1300px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 1300px) {
    display: flex;
    font-size: 20px;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 1300px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const Logo = styled.div``;

export const Img = styled.img`

  @media(max-width: 1300px) {
    width: 115.046px;
    height: 20.287px;
  }
`;

export const Buttom = styled.a``;
