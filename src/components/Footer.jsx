import React from 'react'
import { logoW } from '../assets'
import { footerLinks } from '../constants/main'
import styles from '../styles'
import { AiOutlineArrowRight } from 'react-icons/ai'
// import styles from '../style'
// styles


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingX} flex-col bg-black text-white py-[28px]`}>
    <div className={` mb-8 w-full`}>
      <div className='flex-1 flex justify-between flex-col md:flex-row mr-10'>
        <div className={`flex justify-start items-center py-1 md:py-4`}>
          <span className={` font-semibold sm:text-[64px] text-[28px]  sm:leading-[76.8px] leading-[31.8px] uppercase`}>PhotoBy</span>
          {/* <img src={logoW} alt="" className='w-[] md:w-[41px]' /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
            <rect x="0.724121" y="0.206909" width="35.5862" height="35.5862" rx="8.89655" fill="white" />
            <circle cx="18.517" cy="18" r="5.93103" fill="black" />
          </svg>
        </div>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Lorem ipsum dolor sit amet consectetur. Sit volutpat metus quis ut tellus pellentesque pharetra cursus.
        </p>
      </div>

      <div className={`flex justify-between  md:flex-row flex-col my-10`}>
        <div className="w-1/2 flex justify-between items-start md:flex-row flex-col pt-6 ">
          <div className='flex flex-col justify-start'>
            <p className="  text-[18px] leading-[27px] text-white">
              STAY IN THE KNOW
            </p>
            <div className='py-5 border-b-[1px] border-white w-full flex'>
              <input type="text" placeholder='EMAIL ADDRESS' className='w-full border-none  outline-none bg-transparent text-white placeholder:text-white text-[12px]' />
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>


        {/* <div className='flex-[1.5]'> */}
        <div className='flex justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLinks) => (
            <div key={footerLinks.key} className=' flex flex-col sm:my-0 my-4 min-w-[150px]'>
              <h4 className=' font-medium text-[18px] leading-[27px] text-white'>
                {footerLinks.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerLinks.links.map((link, index) => (
                  <li key={link.name}
                    className={` font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLinks.links.length - 1 ? 'mb-2' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        {/* </div> */}


      </div>


    </div>
  </section>
)


export default Footer
