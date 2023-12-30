import React from 'react'
import styles from '../../styles'
import { pic5 } from '../../assets'


const ContactPage = () => {
    return (
        <section className={`${styles.paddingX}`}>
            <div className=" my-10 flex flex-col-reverse md:flex-row items-start justify-between">
                <div className='w-[100%] md:w-[500px] '>
                    <img src={pic5} alt="services" className='w-full object-cover object-center' />
                </div>

                <div className='flex flex-col relative'>
                    <div className='flex items-start justify-center flex-col'>
                        <div className=''>
                            <div className='flex items-start'>
                                <span className=' w-[20px] h-[20px]  sm:w-[40px] sm:h-[40px] rounded-[100%] bg-black mt-1 sm:mt-3'></span>
                                <h4 className={`${styles.heading2} text-black`}>
                                    CONTACT
                                </h4>
                            </div>
                            <div className='w-[100%] mb-6 flex flex-wrap'>
                                <div className='py-5 border-b-[1px] border-black w-full flex'>
                                    <input type="text" placeholder='FULL NAME' className='w-full border-none  outline-none bg-transparent  text-[12px] placeholder:text-black' />
                                </div>
                                <div className='py-5 border-b-[1px] border-black w-full flex'>
                                    <input type="text" placeholder='EMAIL ADDRESS' className='w-full border-none  outline-none bg-transparent  text-[12px] placeholder:text-black' />
                                </div>
                                <div className='py-5 border-b-[1px] border-black w-full flex'>
                                    <textarea name="" id="" cols="30" rows="10" placeholder='ENTER MESSAGE' className='w-full border-none  outline-none bg-transparent  text-[12px] placeholder:text-black'>Message</textarea>
                                </div>
                                <button className='my-4 py-[8px] px-[14px] md:py-[14px] md:px-[48px] bg-transparent border-[2px] border-black cursor-pointer hover:bg-black hover:text-white transition-all text-black outline-black rounded-full'>SEND MESSAGE</button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default ContactPage
