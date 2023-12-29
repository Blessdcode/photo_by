import React from 'react'
import styles from '../../styles'
import { logo, pic4 } from '../../assets'
import { Brands } from '../../constants/main'

const ProjectDone = () => {
    return (
        <div className="my-8 border-b-[1px] border-black ">
            <section className={`flex items-end justify-between flex-col md:flex-row ${styles.paddingX} ${styles.paddingY}`}>

                <div className='flex flex-col items-start flex-[1.5]'>
                    <div className='relative'>
                        <span className=' w-[15px] h-[15px] rounded-[100%] bg-black absolute bottom-[45%] right-[-25px]'></span>
                        <h3 className={`${styles.heading3} py-8 uppercase`}>About</h3>
                    </div>
                    <div className={`${styles.flexCenter} py-1 md:py-4`}>
                        <span className={`mr-2 ${styles.heading2} uppercase`}>PhotoBy</span>
                        <img src={logo} alt="" className='w-[] md:w-[41px]' />
                    </div>
                    <img src={pic4} alt="" className='h-[228px] object-cover object-center' />
                </div>
                <div className='flex-1 mt-6 md:mt-0'>
                    <p className={`text-[18px] `}>Lorem ipsum dolor sit amet consectetur. Nunc lacus imperdiet adipiscing urna. Amet aenean ac faucibus varius curabitur consequat pellentesque morbi. Tincidunt eleifend morbi mauris nascetur porta vulputate. At egestas mi senectus nam aliquam vivamus. Egestas non sit pulvinar faucibus tincidunt at quis morbi tortor. Ultrices egestas rhoncus in justo massa consectetur est ut magna. Eget vitae duis a aliquam condimentum id non scelerisque. </p>
                    <button className='py-[14px] px-[24px] md:py-[14px] md:px-[48px] bg-black text-white outline-none rounded-full my-2'>Learn More</button>
                </div>


            </section>
            <div className=' flex md:justify-between justify-around items-center flex-wrap mt-4 mb-8 '>

                {Brands.map((brand) => (
                    <div key={brand.id}>
                        <img src={brand.img} alt={brand.id} />
                    </div>
                ))}
            </div>

            <aside className='flex my-16 w-[100%]'>
                <div className='flex flex-col md:flex-row w-[100%'>
                    <div className="box w-[100%] h-[100%] md:h-[360px] md:w-[360px]">
                        <h3 className='text-[28px] md:text-[64px] font-[700]'>200</h3>
                        <p className=' text-[14px] md:text-[18px] font-600]'>Visualisation</p>
                    </div>
                    <div className="box w-[100%] md:w-[360px]">
                        <h3 className='text-white text-[28px] md:text-[64px] font-[700]'>7</h3>
                        <p className=' text-[14px] md:text-[18px] font-600] text-white'>YEARS EXPERIENCE</p>
                    </div>
                    <div className="box w-[100%] md:w-[360px]">
                        <h3 className=' text-[28px] md:text-[64px] font-[700]'>32</h3>
                        <p className=' text-[14px] md:text-[18px] font-600]'>AWWARDS</p>
                    </div>
                    <div className="box w-[100%] md:w-[360px]">
                        <h3 className='text-white text-[28px] md:text-[64px] font-[700]'>16</h3>
                        <p className=' text-[14px] md:text-[18px] font-600] text-white'>PHOTOGRAPHERS</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default ProjectDone
