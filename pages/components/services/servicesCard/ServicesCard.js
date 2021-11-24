import React from 'react'
import { Row, Col } from 'react-bootstrap';
import style from '../../../../styles/servicesCard.module.css'
import { MdOutlinePhonelinkRing } from 'react-icons/md';

function ServicesCard() {

    const cardData = [
        { bgColor: '#4eb5a2' },
        { bgColor: '#f38430' },
        { bgColor: '#8cd5e8' },
        { bgColor: '#f7d74f' },
        { bgColor: '#bfb8f8' },
    ]

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
                {cardData.map((item) => {
                    return (
                        <li >
                            <a href='#'>
                                <div className={style.card}>
                                    <MdOutlinePhonelinkRing style={{ color: item.bgColor }} className={style.cardIcon} />
                                    <p className={style.CardTitle}>Mobile App</p>
                                    <p className={style.cardHeading}>Develope Android +Ios using state of the art Technology React-Native</p>
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