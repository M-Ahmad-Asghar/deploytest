import React from 'react';
import useFooterSection from './useFooterSection';
import style from '../../../styles/footerSection.module.css'
import { Container, Row, Col, Stack, InputGroup, FormControl, Button } from 'react-bootstrap';
import Image from 'next/image';
function FooterSection() {
    const path = '/images/footer'
    const { data } = useFooterSection()
    return (
        <div className={style.root}>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={4} xs={12}>
                        <Stack gap={1}>
                            <p className={`${style.footerMailHeading} title`}>info@techloset.com</p>
                            <p className={`${style.officeAddress} subTitle`}>Kashmir Pull, Canal Road,<br /> Faisalabad</p>
                            <p className={`${style.contactNumber} subTitle`}>0309-<span className={style.textUnderline}>1734246</span></p>
                            <p className={`${style.Follow} title`}>Follow</p>
                            <Stack className={style.iconsRow} direction="horizontal" gap={4} >
                                <div className={style.iconContainer}>
                                    <Image src={`${path}/github.png`} alt='Github icon' width='40px' height='40px' />
                                </div>
                                <div className={style.iconContainer}>
                                    <Image src={`${path}/facebook.png`} alt='facebook icon' width='40px' height='40px' />
                                </div>
                                <div className={style.iconContainer}>
                                    <Image src={`${path}/linkedin.png`} alt='linkedin icon' width='40px' height='40px' />
                                </div>
                            </Stack>
                            <Stack className={style.iconsRow} direction="horizontal" gap={4}>
                                <div className={style.iconContainer}>
                                    <Image src={`${path}/twitter.png`} alt='twitter icon' width='40px' height='40px' />
                                </div>
                                <div className={style.iconContainer}>
                                    <Image src={`${path}/instagram.png`} alt='instagram icon' width='40px' height='40px' />
                                </div>
                                <div className={style.iconContainer}>
                                    <Image src={`${path}/youtube.png`} alt='youtube icon' width='40px' height='40px' />
                                </div>
                            </Stack>

                        </Stack>
                    </Col>
                    <Col lg={6} md={6} sm={8} xs={12} className={style.rightContainer}>
                        {/* <Stack direction='horizontal' gap={1}> */}
                        <Row>
                            <Col sm={4}>
                                <Stack gap={2}>
                                    <span className={`${style.tableHeading} subHeading`}>Company</span>
                                    <span className={`${style.tableItem} commonText`}>Cases</span>
                                    <span className={`${style.tableItem} commonText`}>About Us</span>
                                    <span className={`${style.tableItem} commonText`}>Services</span>
                                    <span className={`${style.tableItem} commonText`}>Careers</span>
                                    <span className={`${style.tableItem} commonText`}>Blog</span>
                                    <span className={`${style.tableItem} commonText`}>Contact</span>
                                </Stack>
                            </Col>
                            <Col sm={4}>
                                <Stack gap={2}>
                                    <span className={`${style.tableHeading} subHeading`}>Services</span>
                                    <span className={`${style.tableItem} commonText`}>Web App</span>
                                    <span className={`${style.tableItem} commonText`}>Mobile App</span>
                                    <span className={`${style.tableItem} commonText`}>E-Commerce</span>
                                    <span className={`${style.tableItem} commonText`}>Artificial Intelligence</span>
                                </Stack>
                            </Col>
                            <Col sm={4}>
                                <Stack gap={2}>
                                    <span className={`${style.tableHeading} subHeading`}>Solutions</span>
                                    <span className={`${style.tableItem} commonText`}>For Business</span>
                                    <span className={`${style.tableItem} commonText`}>For Startup</span>
                                </Stack>
                            </Col>
                        </Row>
                        {/* </Stack> */}
                    </Col>
                </Row>
                <Row className={style.lowerRow}>
                    <Col lg={4} md={6} sm={12} xs={12} >
                        <Stack >
                            <Stack direction='horizontal' gap={1}>
                                <Stack>
                                    <p className='subTitle'>REVIEWED ON</p>
                                    <span className={style.clutchImage}> <Image src={`${path}/clutch.png`} alt='clutch' width='110px' height='65px' /></span>
                                </Stack>
                                <Stack className={style.starAndText}>
                                    <Stack gap={0} direction='horizontal' className={style.starsContainer}>
                                        <span> <Image src={`${path}/star.png`} alt='star' width='22px' height='23px' /></span>
                                        <span> <Image src={`${path}/star.png`} alt='star' width='22px' height='23px' /></span>
                                        <span> <Image src={`${path}/star.png`} alt='star' width='22px' height='23px' /></span>
                                        <span> <Image src={`${path}/star.png`} alt='star' width='22px' height='23px' /></span>
                                        <span> <Image src={`${path}/star.png`} alt='star' width='22px' height='23px' /></span>

                                    </Stack>
                                    <span className={style.rveContainer}><p className={`${style.rvetxt} subTitle`}>32 REVIEWS</p></span>
                                </Stack>
                            </Stack>
                            <Stack>

                            </Stack>
                        </Stack>
                    </Col>
                    {/* <Col lg={2} md={0} sm={0} xs={6} ></Col> */}
                    <Col lg={8} md={6} sm={12} xs={12} >
                        <Stack className={style.newsLatterCont}>
                            <p className={`${style.footerMailHeading} title`}>News<span className={style.textUnderline}>letter</span></p>
                            <InputGroup className={style.InputGroup}>
                                <FormControl
                                    className={style.subscribeInput}
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button
                                    variant="outline-secondary" id="button-addon2" className={`${style.subscribeButton} subTitle`}>
                                    SUBSCRIBE
                                </Button>
                            </InputGroup>
                        </Stack>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default FooterSection
