import React from 'react'
import styles from '../../styles'
import { ServicesEl } from '../../constants/main'
import { pic3 } from '../../assets'


const Services = () => {
    return (
        <div className=' my-8 border-b-[1px] border-black'>
            <section className={`flex  justify-between flex-col md:flex-row ${styles.paddingX} ${styles.paddingY}`}>

                <div className='flex flex-col items-start '>

                    <div className='relative '>
                        <div className='relative'>
                            <span className=' w-[15px] h-[15px] rounded-[100%] bg-black absolute bottom-[45%] right-[-25px]'></span>
                            <h3 className={`${styles.heading3} py-8 uppercase`}>Services</h3>
                        </div>
                    </div>
                    <div className="flex md:flex-nowrap flex-wrap items-center justify-between gap-[42px]">

                        {ServicesEl.map((service) => (
                            <div className='flex py-2 gap-7' key={service.id}>

                                <div>
                                    <img src={service.img} alt={service.id} className='p-2 w-[46px] rounded-full bg-Bground' />
                                    <h4 className='py-6'>{service.title}</h4>
                                    <p className={`${styles.paragraph} `}>{service.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          
        </div>
    )
}

export default Services
