import { Container, Content, Slider, ChipsOne, ChipsTwo, ContainerChips, ChipsThree, ContainerSlide } from '../../styles/indexStyle'
import SliderMain from '../../components/SliderMain'
import PokerTable from '../../components/PokerTable'
import Tournaments from '../../components/Tournaments'
import Blog from '../../components/Blog'
import ReviewApp from '../../components/ReviewApp'


export default function Home() {
  return (
   <Container>
     <Content>
        <ContainerSlide>
          <Slider>
            <SliderMain/>
          </Slider>
        </ContainerSlide>
        <ChipsOne src='/images/ficha-01.png'/>
        <ContainerChips>
          <ChipsTwo src='/images/ficha-02.png'/>
        </ContainerChips>
        <PokerTable/>
          <ChipsThree src='/images/ficha-03.png' />
        <Tournaments/>
        <ReviewApp/>
        {/* <Blog/> */}
     </Content>
   </Container>
  )
}
