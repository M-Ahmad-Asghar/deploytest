import React from 'react'
import style from '../styles/errorPage.module.css'
import Link from 'next/link'

export default function ErrorPage() {
    return (
        <div>
            <h1 className={style.title}>Something Went Wrong</h1>
            <section className={style.errorContainer}>
                <span className={style.four}><span className={style.screenReaderText}>4</span></span>
                <span className={style.zero}><span className={style.screenReaderText}>0</span></span>
                <span className={style.four}><span className={style.screenReaderText}>4</span></span>
            </section>
            <div className={style.linkContainer}>
                <Link href='/' passHref={true}>
                    <div className={style.moreLink}>Back to Home </div>
                </Link>
            </div>
        </div>
    )
}