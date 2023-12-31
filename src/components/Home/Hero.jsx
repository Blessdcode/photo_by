import React,{useEffect,useState} from 'react'
import styles from '../../styles'
import { pic1 } from "../../assets"
import { motion, variants,useAnimation } from 'framer-motion'


const textVariant = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Hero = () => {
    const controls = useAnimation();
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      const updateAnimation = () => {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Adjust the scroll threshold as needed
      if (scrollY > 300) {
        updateAnimation();
      }
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollY, controls]);

    return (
        <section className={`${styles.paddingX}`}>
            <div className=" my-10 flex items-center justify-between">
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -500 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1,  }}
                    className='flex flex-col relative'>
                    <motion.div

                        className='flex items-start'>
                        <span className=' w-[20px] h-[20px]  sm:w-[40px] sm:h-[40px] rounded-[100%] bg-black mt-1 sm:mt-3'></span>
                        <motion.h1 variants={textVariant} className={`${styles.heading2} text-black`}>
                            BRAND <br />
                            RECOGNITION
                        </motion.h1>
                    </motion.div>
                    <div className='flex items-center gap-4 mt-7'>
                        <p className={`${styles.paragraph} font-[500]`}>PHOTOGRAPHY</p>
                        <span className='w-[40px] sm:w-[183px] h-[1px] bg-black'></span>
                        <span className=' w-[20px] h-[20px] rounded-[100%] bg-black'></span>
                    </div>
                </motion.div>
                <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 500 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='relative hidden md:block'>
                    <p className='text-[#0000000d] text-[48px] sm:text-[196px] font-[500]'>2021</p>
                    <p className=' absolute bottom-[70px] right-[40px] text-[28px] font-[500]'>Next</p>
                </motion.div>
            </div>
            <motion.div
                animate={{ scale: 1, }}
                initial={{ scale: 0, }}

                transition={{ duration: 1 }}
                className='w-[100%] md:min-w-[1356px] '>
                <img src={pic1} alt="services" className='w-full h-[423.448px] md:h-full object-cover object-center' />
            </motion.div>
        </section>
    )
}

export default Hero
