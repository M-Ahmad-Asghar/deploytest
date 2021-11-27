import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import style from '../../styles/multiItemsCarousel.module.css'
function useMultiItemsCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
        const { totalItems, currentSlide } = carouselState;
        return (
            <Container fluid className={style.customButtonGroup}>
                <Row className={style.btnRow}>
                    <Col lg={6}>
                        <img width='15px' height='28px' src='/images/clients-and-partners/right-arrow.png' onClick={() => previous()} className={style.btn1} />
                    </Col>
                    <Col lg={6}>
                        <img width='15px' height='28px' src='/images/clients-and-partners/left-arrow.png' onClick={() => next()} className={style.btn2} />
                    </Col>
                </Row>
            </Container>
        );
    };

    var settings = {
        arrows: false,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 6000,
        draggable: true,
        swipeable: true,
    }
    return { responsive, CustomButtonGroup, settings }
}

export default useMultiItemsCarousel
