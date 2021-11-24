import React from 'react'
import style from '../../../../styles/cababilities.module.css'
import { Row, Col } from 'react-bootstrap';
import { GrReactjs } from 'react-icons/gr';
import { BsArrowRight } from 'react-icons/bs';

export default function Capabilities() {
    return (
        <div className={style.main}>
            <div className='container'>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div style={{marginTop:'50px'}}>
                            <div className={style.circleContainer}>
                                <div className={style.circle}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                                <div className={style.circle}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                            </div>
                            <div className={style.circleContainer2}>
                                <div className={style.circle2}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                                <div className={style.circle2}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                            </div>
                            <div style={{marginTop:'-25px'}} className={style.circleContainer}>
                                <div className={style.circle}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                                <div className={style.circle}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                            </div>
                            <div className={style.circleContainer2}>
                                <div className={style.circle2}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                                <div className={style.circle2}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                            </div>
                            <div style={{marginTop:'-25px'}} className={style.circleContainer}>
                                <div className={style.circle}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                                <div className={style.circle}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                            </div>
                            <div className={style.circleContainer2}>
                                <div className={style.circle2}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                                <div className={style.circle2}>
                                    <GrReactjs className={style.circleIcon} />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <h2 className={style.title}>Technology Capabilities</h2>
                        <p>packages and web page editors now use Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web<br />
                            sites still in their infancy Various versions have evolved over the<br />
                            years sometimes by accident sometimes on purpose <br />injected humour and the like.</p>
                        <div className={style.arrowCircleMain}>
                            <div className={style.arrowCircle}>
                                <BsArrowRight className={style.arrowCircleIcon} />
                            </div>
                            <p className={style.arrowCircleHeading}>{'90% Average Customer Satisfaction'}</p>
                        </div>
                        <div className={style.arrowCircleMain}>
                            <div className={style.arrowCircle}>
                                <BsArrowRight className={style.arrowCircleIcon} />
                            </div>
                            <p className={style.arrowCircleHeading}>{'70.3% Net Promoter Scope'}</p>
                        </div>
                        <div className={style.arrowCircleMain}>
                            <div className={style.arrowCircle}>
                                <BsArrowRight className={style.arrowCircleIcon} />
                            </div>
                            <p className={style.arrowCircleHeading}>{'174 Active World-class Client'}</p>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}
