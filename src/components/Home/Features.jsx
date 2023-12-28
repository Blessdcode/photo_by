import React from 'react'
import styles from '../../styles'
import { Feature } from '../../constants/main'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import '@splidejs/splide'



const Features = () => {
    return (
        <div className=' my-8 '>
            <section className={`flex  justify-between flex-col md:flex-row ${styles.paddingX} ${styles.paddingY}`}>

                <div className='flex flex-col items-start '>

                    <div className='relative '>
                        <div className='relative'>
                            <span className=' w-[15px] h-[15px] rounded-[100%] bg-black absolute bottom-[45%] right-[-25px]'></span>
                            <h3 className={`${styles.heading3} py-8`}>FEATURE NEWS</h3>
                        </div>
                    </div>

                    <div className=' w-[100%]'>
                        <Splide
                            options={{
                                perPage: 3,
                                arrows: true,
                                pagination: false,
                                drag: "free",
                                gap: "2rem",

                                breakpoints: {
                                    640: {
                                        perPage: 1,
                                    },
                                }
                            }}>

                            {Feature.map((feat) => (
                                <SplideSlide key={feat.id}>
                                    <div className='w-[100%'>
                                        <img src={feat.img} alt={feat.id} className='w-[100%] h-[400px] object-cover'/>
                                        <div className='flex justify-between mt-2 mb-4 border-b-[1px] border-black p-2'>
                                            <p className='text-[14px] font-[600]'>{feat.small}</p>
                                            <p className='text-[14px] font-[600]'>{feat.date}</p>
                                        </div>
                                        <div>
                                            <h3 className='font-[600] text-[14px] md:text-[24px]'>{feat.heading}</h3>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}

                        </Splide>

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Features
