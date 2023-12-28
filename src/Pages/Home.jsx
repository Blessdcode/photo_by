import React from 'react'
import styles from '../styles'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Features from '../components/Home/Features'

const Home = () => {
  return (
    <div className={`${styles.marginX} ${styles.marginY}`}>
      <Hero />
      <About />
      <Services />
      <Features />
    </div>
  )
}

export default Home
