import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/esm/Image';
import coro1 from '../assets/coro1.png'
import coro2 from '../assets/coro2.jpg'
import coro3 from '../assets/cor3.jpg'


function Corousel() {
  return (
    <>
    
    <Carousel>
     
      <Carousel.Item interval={2000}>
        <Image src={coro1} fluid style={{width:'100%'}} className='coro-image'/>
    
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Image src={coro2} fluid style={{width:'100%'}} className='coro-image'/>

      
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <Image src={coro3} fluid style={{width:'100%'}} className='coro-image'/>

    
      </Carousel.Item>
    </Carousel>
  
    </>
  );
}

export default Corousel;