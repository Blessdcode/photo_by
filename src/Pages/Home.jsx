import styles from '../styles'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

const Home = () => {
  return (
    <div className={` ${styles.marginY}`}>
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default Home
