import React from 'react'
import styles from '../styles'
import AboutHero from '../components/About/AboutHero'
import AboutServices from '../components/About/AboutServices'
import ProjectDone from '../components/About/ProjectDone'



const Home = () => {
  return (
    <div className={`${styles.marginX} ${styles.marginY}`}>
      <AboutHero />
      <ProjectDone />
      <AboutServices />
    </div>
  )
}

export default Home
