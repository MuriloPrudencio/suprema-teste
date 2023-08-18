import React, { useState } from 'react'
import { Container, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, Logo, Img } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)
  const { asPath } = useRouter()

  const showSiderbar = () => setSidebar(!sidebar)

  function activeLink(path) {
    return asPath === `/${path}` ? 'active' : ''
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Logo>
          <Img src='/images/logos/LogoSuprema.png' alt='Logo Suprema Poker' />
          </Logo>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSiderbar} color='#EFA144'/>
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSiderbar}><FaTimes color="#EFA144" /></CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSiderbar}>HOME</Ancora>
          </Link>
          <Link href="tournament">
            <Ancora className={activeLink('tournament')} onClick={showSiderbar}>TORNEIOS</Ancora>
          </Link>
          <Link href="ranking">
            <Ancora className={activeLink('ranking')} onClick={showSiderbar}>RANKING</Ancora>
          </Link>
          <Link href="onboard">
            <Ancora className={activeLink('onboard')} onClick={showSiderbar}>SUPREMA 5 ANOS</Ancora>
          </Link>
          {/*
          <Link href="comoJogar">
            <Ancora className={activeLink('comoJogar')} onClick={showSiderbar}>COMO JOGAR</Ancora>
          </Link>
          <Link href="about">
            <Ancora className={activeLink('sobre')} onClick={showSiderbar}>SOBRE A SUPREMA</Ancora>
          </Link>
          <Link href="homeGame">
            <Ancora className={activeLink('homeGame')} onClick={showSiderbar}>HOME GAME</Ancora>
          </Link>
          <Link href="blog">
            <Ancora className={activeLink('blog')} onClick={showSiderbar}>BLOG E NOTÍCIAS</Ancora>
          </Link>
           */}
        </NavLinks>
      </Content>
    </Container>
  )
}