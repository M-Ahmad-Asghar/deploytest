import React from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../commonComponents/header/Header'
import 'react-multi-carousel/lib/styles.css';
function MyApp({ Component, pageProps }) {
  return (

    <div>
      <Header />
      <Component {...pageProps} />
    </div>


  )
}

export default MyApp
