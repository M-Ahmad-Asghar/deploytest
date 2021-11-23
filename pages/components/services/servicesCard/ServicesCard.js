import React from 'react'
import { Row, Col } from 'react-bootstrap';
import style from '../../../../styles/servicesCard.module.css'
import { FaMobileAlt } from "react-icons/fa";
import Link from 'next/link'
function ServicesCard() {

    // const cardData = [
    //     { icon: <FaMobileAlt className={style.cardIcon} />, title: 'Mobile app', heading: "Develop Android +Ios using state of the are Technology React-Native",bgColor:'green' },
    //     { icon: <FaMobileAlt className={style.cardIcon} />, title: 'Mobile app', heading: "Develop Android +Ios using state of the are Technology React-Native",bgColor:'oarange' },
    //     { icon: <FaMobileAlt className={style.cardIcon} />, title: 'Mobile app', heading: "Develop Android +Ios using state of the are Technology React-Native",bgColor:'perpal' },
    //     { icon: <FaMobileAlt className={style.cardIcon} />, title: 'Mobile app', heading: "Develop Android +Ios using state of the are Technology React-Native",bgColor:'blue' },
    //     { icon: <FaMobileAlt className={style.cardIcon} />, title: 'Mobile app', heading: "Develop Android +Ios using state of the are Technology React-Native",bgColor:'gray' },

    // ]
    return (
        <div className={style.main} >
            <Row>
                <Col lg={2} md={2} sm={1}></Col>
                <Col lg={8} md={8} sm={10} xs={12} >
                    <h2 className={style.title}>Services</h2>
                    <p className={style.heading}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </Col>
                <Col lg={2} md={2} sm={1}></Col>

            </Row>
            <Row style={{display:'flex',justifyContent:'center'}}>
                {/* {cardData.map((item) => (
                    <Col lg={4} md={6} sm={6} xs={12}>
                        <div className={style.card}>
                            <div className={style.iconsContainer}>
                                <a href="#">
                            {item.icon}
                            </a>
                            </div>
                            <span className={style.cardTitle}>{item.title}</span>
                            <p className={style.cardHeading}>{item.heading}</p>
                        </div>
                    </Col>
                ))} */}
                <Col lg={4} md={6} sm={6} xs={12}>
                        <div className={style.card}>
                            <div className={style.iconsContainer}>
                                <a href="#">
                                <FaMobileAlt className={style.cardIcon} />
                            </a>
                            </div>
                            <span className={style.cardTitle}>hhdfdsa</span>
                            <p className={style.cardHeading}>tyrewq</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={12}>
                        <div className={style.card}>
                            <div className={style.iconsContainer}>
                                <a href="#">
                                <FaMobileAlt className={style.cardIcon} />
                            </a>
                            </div>
                            <span className={style.cardTitle}>hhdfdsa</span>
                            <p className={style.cardHeading}>tyrewq</p>
                        </div>
                    </Col>
            </Row>
        </div>
    )

}
export default ServicesCard