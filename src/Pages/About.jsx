import React from 'react'
import styles from '../styles'
import AboutHero from '../components/About/AboutHero'
import AboutServices from '../components/About/AboutServices'
import ProjectDone from '../components/About/ProjectDone'
import { Reviews } from '../constants/main';



const Home = () => {
  return (
    <div className={`${styles.marginX} ${styles.marginY}`}>
      
      <AboutHero />
      <ProjectDone />
      {/* {Reviews.map((review) => (
          <ProjectDone key={review.id} targetNumber={review.text_1}  />
        ))} */}
      <AboutServices />
    </div>
  )
}

export default Home
