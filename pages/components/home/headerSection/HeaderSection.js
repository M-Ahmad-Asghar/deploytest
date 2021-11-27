import React from 'react'
import style from '../../../../styles/headerSection.module.css'
import FacebookIcon from '../../../../public/icons/facebook.svg'
import GithubIcon from '../../../../public/icons/github.svg'
import LinkedInIcon from '../../../../public/icons/linkedIn.svg'
import TwitterIcon from '../../../../public/icons/twitter.svg'
import InstagramIcon from '../../../../public/icons/instagram.svg'
import Typewriter from 'typewriter-effect';
import Image from 'next/image'

function HeaderSection() {

    return (
        <div className={style.bgColor}>
            <div className={style.main}>
                <div className={style.contantContainer}>
                    <h1 className={style.title}>
                        <Typewriter
                            options={{
                                strings: ['YOUR VERY OWN TECHNOLOGY CLOSET!', ' The Techloset full range of engineering services your company needs.'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <h1 className={style.titleSm}>
                        YOUR VERY OWN TECHNOLOGY CLOSET!
                    </h1>
                    <ul className={style.headerSectionlinksTab}>
                        <li> <a href='#'>Mobile App Development</a></li>
                        <li><a href='#'>Web App Development</a></li>
                        <li><a href='#'>Artificial Intelligence</a></li>
                        <li><a href='#'>E-Comerace</a></li>
                        <li><a href='#'>DevOps </a></li>
                        <li><a href='#'>Blog</a></li>
                    </ul>


                    <ul className={style.IconsContainer}>
                        <li>
                            <a href='#'>
                                <Image src={FacebookIcon} className={style.icon} alt='FacebookIcon' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <Image src={GithubIcon} className={style.icon} alt='FacebookIcon' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <Image src={LinkedInIcon} className={style.icon} alt='FacebookIcon' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <Image src={TwitterIcon} className={style.icon} alt='FacebookIcon' />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <Image src={InstagramIcon} className={style.icon} alt='FacebookIcon' />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default HeaderSection