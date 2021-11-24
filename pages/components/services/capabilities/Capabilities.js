import React from 'react'
import style from '../../../../styles/cababilities.module.css'
import { Row, Col } from 'react-bootstrap';
import { GrReactjs } from "react-icons/gr";

export default function Capabilities() {
    return (
        <div className={style.main}>
            <div className="container">
                <Row >
                    <Col lg={6} md={12} sm={12} xs={12} >
                        <div className={style.circleContainer}>
                            <div className={style.circle}>
                                <GrReactjs className={style.circleIcon} />
                            </div>
                            <div className={style.circle}>
                                <GrReactjs className={style.circleIcon} />
                            </div>
                        </div>
                       
                       

                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        hgfdsa
                    </Col>

                </Row>
            </div>
        </div>
    )
}
