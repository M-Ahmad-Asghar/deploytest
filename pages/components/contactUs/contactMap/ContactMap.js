import React from 'react'
import styles from '../../../../styles/contactMap.module.css'
import Image from 'next/image'
import MapImage from '../../../../public/map.png'
import { Row, Col } from 'react-bootstrap'

export default function ContactMap() {

  return (
    <Row className={styles.mainContainer}>
      <Col lg={4} md={4} sm={4} xs={12}>
        <div>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.titleLine} />
          <p className={styles.hqText}>HQ</p>
          <p>Kashmir Pull,Canal Road<br/>Faisalabad</p>
          <p>0309-1734246</p>
          <p className={styles.emailTxt}>info@techloset.com</p>
          <div className={styles.btn}>
            <p className={styles.btnTxt}>Project Inquiries</p>
          </div>
        </div>
      </Col>
      <Col lg={8} md={8} sm={8} xs={12}>
        <Image className={styles.mapImage}   height="450px"  src={MapImage} alt='map' />
        <p className={styles.mapHeading}>Find us in the heart of Pakistan</p>
      </Col>

    </Row>
  )
}