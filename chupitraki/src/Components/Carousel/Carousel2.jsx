import './Carousel.css'
import styled from 'styled-components';
import allBebidas from '../Item/AllBebidas'
import CarouselItem from './CarouselItem';

const bebidas3 = [...allBebidas, ...allBebidas];

const CarouselContainer = styled.div`
    background-color: rgb(255, 194, 25, 0.7);
    width: 100%;
    height: 230px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    
`

export default function Carousel2() {

    return (
        <CarouselContainer>
            <div className='carouselContainer'>
                <div className="itemCarousel animate-scroll">
                    {bebidas3.map((bebida, index) => (
                        <CarouselItem item={bebida} key={index}/>
                    ))}
                </div>
            </div>
        </CarouselContainer>
    )
}
