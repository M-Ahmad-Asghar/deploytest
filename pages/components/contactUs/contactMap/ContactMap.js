import React from 'react'
import styles from '../../../../styles/ContactMap.module.css'
import Image from 'next/image'
import MapImage from '../../../../public/map.png'
import { Row, Col } from 'react-bootstrap'

export default function ContactMap() {

  return (
    <Row className={styles.mainContainer}>
      <Col lg={5}>
        <div>
          <h2 className={styles.title}>Contact</h2>
          <div className={styles.titleLine} />
          <p className={styles.hqText}>HQ</p>
          <p>Kashmir Pull,Canal Road</p>
          <p>Faisalabad</p>
          <p>0309-1734246</p>
          <p className={styles.emailTxt}>info@techloset.com</p>
        </div>
      </Col>
      <Col lg={7}>
        <div className={styles.mapImage}>
          <Image src={MapImage} alt='map' />
        </div>
      </Col>

    </Row>
  )
}