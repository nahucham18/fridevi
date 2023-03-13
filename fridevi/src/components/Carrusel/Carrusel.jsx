import Carousel from 'react-bootstrap/Carousel';
import style from './Carrusel.module.css'

function Carrusel() {
    return (
    <Carousel className={style.container}>
        <Carousel.Item>
        <img
            className="d-block w-100 h-100 "
            src="http://www.fridevi.com.ar/images/default/slider/1.png"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100 h-100"
            src="http://www.fridevi.com.ar/images/default/slider/2.png"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className='bg-white'>
        <img
            className="d-block w-100 "
            src="http://www.fridevi.com.ar/images/default/slider/3.png"
            alt="Third slide"
        />
            </div>

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default Carrusel;