import React from 'react'
import { Row, Col } from 'react-bootstrap';
import style from '../../../../styles/services.module.css'
import { servisesCard } from '../../../constants/constants';
import Image from 'next/image'

function ServicesCard() {

    return (
        <div className={style.main} >
            <Row>
                <Col lg={2} md={2} sm={1}></Col>
                <Col lg={8} md={8} sm={10} xs={12} >
                    <h2 className={style.title}>Services</h2>
                    <p className={style.heading}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </Col>
                <Col lg={2} md={2} sm={1}></Col>
            </Row>
            <ul className={style.cardContainer}>
                {servisesCard && servisesCard.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href='#'>
                                <div className={style.card}>
                                    <Image src={item.icon} className={style.cardIcon} />
                                    <span className={style.CardTitle}>{item.title}</span>
                                    <p className={style.cardHeading}>{item.heading}</p>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>

        </div>
    )

}

export default ServicesCard