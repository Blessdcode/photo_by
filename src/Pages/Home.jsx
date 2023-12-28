import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import styles from '../styles'



const Home = () => {
  return (
    <div className={`${styles.marginX} ${styles.marginY}`}>
     <Hero/>
     <About/>
    </div>
  )
}

export default Home
