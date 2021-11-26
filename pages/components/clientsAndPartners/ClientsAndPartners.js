import React from 'react'
import useClientsAndPartners from './useClientsAndPartners';
import style from '../../../styles/clientsAndPartners.module.css'
import MultiItemsCarousel from '../../../commonComponents/multiItemsCarousel/MultiItemsCarousel';
import Container from 'react-bootstrap/Container'
function ClientsAndPartners() {
    const { imagesSrc } = useClientsAndPartners()
    return (
        <div className={style.root} >
            <div className={style.carouselContainer}>
                <Container className={style.secondContainer}>
                    <p className={`${style.sliderHeading} title`}>CLIENTS AND PARTNERS</p>
                    <p className={`${style.sliderQuote} subTitle`}>We love to partner with curious technologists to build interesting and useful things.</p>
                    <Container >
                        <MultiItemsCarousel imagesSrc={imagesSrc} />
                    </Container>
                </Container>
            </div>


        </div>
    )
}

export default ClientsAndPartners
// https://via.placeholder.com/300x300