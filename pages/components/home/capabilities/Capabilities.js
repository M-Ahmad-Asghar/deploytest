import React from 'react'
import style from '../../../../styles/cababilities.module.css'
import { Row, Col } from 'react-bootstrap';
import ReactIcon from '../../../../public/icons/reactIcon.png'
import PytorchIcon from '../../../../public/icons/pytorchIcon.png'
import CaffeIcon from '../../../../public/icons/caffeIcon.png'
import JangoIcon from '../../../../public/icons/jangoIcon.png'
import JavascriptIcon from '../../../../public/icons/javascriptIcon.png'
import KerasIcon from '../../../../public/icons/kerasIcon.png'
import FlaskIcon from '../../../../public/icons/flaskIcon.png'
import ExpressIcon from '../../../../public/icons/expressIcon.png'
import FirebaseIcon from '../../../../public/icons/firebaseIcon.png'
import FfIcon from '../../../../public/icons/ffIcon.png'
import MongodbIcon from '../../../../public/icons/mongodbIcon.png'
import LearnIcon from '../../../../public/icons/LearnIcon.png'
import RightArrowIcon from '../../../../public/icons/rightArrow.png'


import Image from 'next/image'

export default function Capabilities() {
    return (
        <div className={style.main}>
            <Row>
                <Col lg={6} md={6} sm={12} xs={12} >
                    <div >
                        <div className={style.circleContainer}>
                            <div className={`${style.circle} hovicon effect`}>
                                <Image src={ReactIcon} alt="icon" className={style.circleIcon} />
                            </div>
                            <div className={`${style.circle} hovicon effect`}>
                                <Image src={PytorchIcon} alt="icon" className={style.circleIcon} />
                            </div>
                        </div>
                        <div className={style.secoundCircleContainer}>
                            <div className={`${style.secoundCircle} hovicon effect`}>
                                <Image src={JangoIcon} alt="icon" className={style.circleIcon} />

                            </div>
                            <div className={`${style.secoundCircle} hovicon effect`}>
                                <Image src={CaffeIcon} alt="icon" className={style.circleIcon} />
                            </div>
                        </div>
                        <div className={style.thirdCircleContainer}>
                            <div className={`${style.circle} hovicon effect`}>
                                <Image src={KerasIcon} alt="icon" className={style.circleIcon} />
                            </div>
                            <div className={`${style.circle} hovicon effect`}>
                                <Image src={FlaskIcon} alt="icon" className={style.circleIcon} />
                            </div>
                        </div>
                        <div className={style.secoundCircleContainer}>
                            <div className={`${style.secoundCircle} hovicon effect`}>
                                <Image src={ExpressIcon} alt="icon" className={style.circleIcon} />
                            </div>
                            <div className={`${style.secoundCircle} hovicon effect`}>
                                <Image src={FirebaseIcon} alt="icon" className={style.circleIcon} />
                            </div>
                        </div>
                        <div className={style.thirdCircleContainer}>
                            <div className={`${style.circle} hovicon effect`}>
                                <Image src={FfIcon} alt="icon" className={style.circleIcon} />
                            </div>
                            <div className={`${style.circle} hovicon effect`}>
                                <Image src={MongodbIcon} alt="icon" className={style.circleIcon} />
                            </div>
                        </div>
                        <div className={style.secoundCircleContainer}>
                            <div className={`${style.secoundCircle} hovicon effect`}>
                                <Image src={LearnIcon} alt="icon" className={style.circleIcon} />
                            </div>
                            <div className={`${style.secoundCircle} hovicon effect`}>
                                <Image src={JavascriptIcon} alt="icon" className={style.circleIcon} />
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                    <h2 className={style.title}>Technology Capabilities</h2>
                    <p>Techloset aspires to enhance the productivity and
                        growth of businesses around the world with a
                        comprehensive range of digital solutions and
                        services using the latest state of art
                        technologies.</p>
                    <div className={style.arrowCircleMain}>
                        <div className={style.arrowCircle}>
                            <div className={style.arrowCircleIcon}>
                                <Image src={RightArrowIcon} alt="icon" />
                            </div>
                        </div>
                        <p className={style.arrowCircleHeading}>{'90% Average Customer Satisfaction'}</p>
                    </div>
                    <div className={style.arrowCircleMain}>
                        <div className={style.arrowCircle}>
                        <div className={style.arrowCircleIcon}>
                                <Image src={RightArrowIcon} alt="icon" />
                            </div>
                        </div>
                        <p className={style.arrowCircleHeading}>{'70.3% Net Promoter Scope'}</p>
                    </div>
                    <div className={style.arrowCircleMain}>
                        <div className={style.arrowCircle}>
                        <div className={style.arrowCircleIcon}>
                                <Image src={RightArrowIcon} alt="icon" />
                            </div>
                        </div>
                        <p className={style.arrowCircleHeading}>{'174 Active World-class Client'}</p>
                    </div>
                </Col>
            

            </Row>
        </div>
    )
}
