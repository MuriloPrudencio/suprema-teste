import React from 'react';
import UIButton from "../Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Content, Container, Presentation, Title, Paragraph } from './style';
import ButtonDownload from '../ButtonDownload';


const images = [
  { 
    id: 1,
    src: '/images/app.png', 
    alt: 'APP Suprema Poker', 
    title: `Lorem ipsum dolor sit amet, consectetur`, 
    content: `Lorem enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip` 
  },
  { 
    id: 0,
    src: '/images/sms.png',
    alt: 'Suprema Micro Series',
    img: '/images/smsTitle.png'
  },
  { 
    id: 0,
    src: '/images/blog.png', 
    alt: 'Blog', 
    img: '/images/blogTitle.png'
  },
  { 
    id: 0,
    src: '/images/satelites.png', 
    alt: 'Suprema Micro Serie', 
    img: '/images/sateliteTitle.png'
  },
];


export default function SliderMain () {
 
  return (
    <Container>
      <Content>
        <Carousel 
          showArrows={false}
          swipeable={false}
          autoPlay={true}
          infiniteLoop={true}
          className="carousel-container"
        >
          {images.map((image, index) => (
            <Container  key={index}>
              <img src={image.src} alt={image.alt} />
              <Presentation>
                {/* <Title>{image.title}</Title>
                <Paragraph>
                  {image.content}
                </Paragraph> */}
                {image.id == 1 ? <UIButton>BAIXE O APP AGORA</UIButton> : ''}
              </Presentation>
            </Container>
          ))}
        </Carousel>
      </Content>
    </Container>
  );
};