import React from 'react'
import styles from '../../styles'
import { pic11, pic12, pic13, pic14, pic15 } from '../../assets'



const Hero = () => {
    return (
        <section className={`${styles.paddingX}`}>
            <div className=" my-10 flex flex-col md:flex-row items-center justify-between">
                <div className='flex flex-col relative'>
                    <div className='flex items-start flex-col'>
                        <span className=' w-[20px] h-[20px]  sm:w-[40px] sm:h-[40px] rounded-[100%] bg-black mt-1 sm:mt-3'></span>
                        <h4 className={`${styles.heading2} text-black`}>
                            BRAND <br />
                            RECOGNITION
                        </h4>
                        <p className={`${styles.paragraph} md:w-1/2 my-3`}>Lorem ipsum dolor sit amet consectetur. Eget vitae leo dolor sed massa. Lorem pulvinar ut amet dictumst id netus neque consectetur semper. Nec et habitant mi amet penatibus purus commodo. </p>

                    </div>
                </div>
                <div className='relative'>
                    <div className="flex">
                        <img src={pic13} className='w-[100%]' />
                        <div className=' bg-white md:p-[24px] p-[16px] md:w-[40%] shadow-md absolute md:bottom-[-10px] bottom-0 md:left-[-22px]'>
                            <p className=''>
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <div className="btn">
                                Explore services
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className=" my-16 flex flex-col md:flex-row items-center justify-between">
                <div className='relative mb-8'>
                    <div className="flex">
                        <img src={pic11} className='w-[360px] h-[450px] md:h-[100%] md:w-[100%] object-cover object-center' />
                        <div className='w-[100%] bg-white md:p-[24px] p-[12px] md:w-[40%] shadow-md absolute md:bottom-[-10px] bottom-0 md:left-[-22px] left-0'>
                            <p className=''>
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <div className="btn">
                                Explore services
                            </div>

                        </div>

                    </div>
                </div>
                <div className='relative mb-8'>
                    <div className="flex">
                        <img src={pic14} className='w-[360px] h-[450px] md:h-[100%] md:w-[100%] object-cover object-center' />
                        <div className='w-full bg-white md:p-[24px] p-[12px] md:w-[40%] shadow-md absolute md:bottom-[-10px] bottom-0 md:left-[-22px] left-0'>
                            <p className=''>
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <div className="btn">
                                Explore services
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className=" my-16 flex flex-col md:flex-row items-center justify-between">
                <div className='relative mb-8'>
                    <div className="flex">
                        <img src={pic12} className='w-[360px] h-[450px] md:h-[100%] md:w-[100%] object-cover object-center' />
                        <div className='w-full bg-white md:p-[24px] p-[12px] md:w-[40%] shadow-md absolute md:bottom-[-10px] bottom-0 md:left-[-22px] left-0'>
                            <p className=''>
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <div className="btn">
                                Explore services
                            </div>

                        </div>

                    </div>
                </div>
                <div className='relative mb-8'>
                    <div className="flex">
                        <img src={pic15} className='w-[100%] h-[400px] md:h-[100%] md:w-[100%] object-cover object-center' />
                        <div className='w-full bg-white md:p-[24px] p-[12px] md:w-[40%] shadow-md absolute md:bottom-[-10px] bottom-0 md:left-[-22px] left-0'>
                            <p className=''>
                                DIGITAL PRODUCT SELLING ON  INTERNET
                            </p>
                            <div className="btn">
                                Explore services
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
