import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import style from '../../../styles/headerSection.module.css'
import Link from 'next/link'

function HeaderSection() {
    return (
        <div className={style.main}>
            <div className={style.contantContainer}>
                <h1 className={style.title}>
                    YOUR VERY OWN TECHNOLOGY CLOSET!
                </h1>
                <ul className={style.linksTab}>
                    <li><Link href="/">Mobile App Development</Link></li>
                    <li><Link href="portfolio">Web App Development</Link></li>
                    <li><Link href="#">Artifial Inteligence</Link></li>
                    <li><Link href="#">E-Comerace</Link></li>
                    <li><Link href="#">DevOps </Link></li>
                    <li><Link href="#">Blog</Link></li>
                </ul>
                <ul className={style.IconsContainer}>
                    <li>
                        <a href="#">
                            <AiFillGithub className={style.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineInstagram className={style.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaFacebookF className={style.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaLinkedinIn className={style.icon} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderSection