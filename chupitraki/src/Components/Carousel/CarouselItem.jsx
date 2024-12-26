import './Carousel.css';

export default function CarouselItem({ item }) {
    return (
        <div className="carouselItemContainer">
            <div className=" imgContainerItem">
                <img src={item.img} alt={item.modelo} className='imgCarousel' />
                <span className='spanCarousel'>{item.marca} {item.modelo}</span>
            </div>
        </div>
    )
}