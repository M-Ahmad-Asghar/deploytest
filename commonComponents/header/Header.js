import React from 'react'
import Link from 'next/link'
import style from '../../styles/header.module.css'
import { Navbar } from 'react-bootstrap';
import Image from 'next/image'
import Logo from '../../public/logo.png'

function Header() {

    return (
        <div className={style.headerContainer}>
            <Navbar expand='lg' variant='light'>
                <Navbar.Brand href='#home'>
                    <div className={style.image} >
                        <Image src={Logo} alt='logo' />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle className={style.toggleBtn} />
                <Navbar.Collapse className='justify-content-end'>
                    <ul className={style.linksMain}>
                        <li><Link href='/'>Cases</Link></li>
                        <li><Link href='services'>Services</Link></li>
                        <li><Link href='#'>About Us</Link></li>
                        <li><Link href='#'>Careers</Link></li>
                        <li><Link href='#'>Blog</Link></li>
                        <li><Link href='contactUs'>Contact Us</Link></li>
                        <li><Link href='#'>
                            <span className={style.btn}>Hire Us
                                <div className={style.container}>
                                    <div className={style.dot1}></div>
                                    <div className={style.dot2}></div>
                                    <div className={style.dot3}></div>
                                </div>
                            </span>
                        </Link>
                        </li>

                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header