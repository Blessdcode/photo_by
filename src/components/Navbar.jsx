import { useState } from 'react'
import { navLinks } from '../constants/main'
import { logo } from '../assets'
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import styles from '../styles'
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    // setToggle(!toggle)
    setToggle((prevToggle) => !prevToggle);
    setOpen((prevOpen) => !prevOpen);
  }

  const closeMenuOnClick = () => {
    toggleMenu();
  };
  const location = useLocation();


  const isActive = (nav) => {
    return `#${nav.id}` === location.pathname;
  };



  return (
    <nav className=' flex justify-between items-center py-6'>
      <div className=" flex items-center justify-start">
        <div className="flex">
          {/* logo */}
          <div className=' flex items-center justify-center gap-1'>
            <span>PHOTOBY</span>
            <img src={logo} alt="logo" />
          </div>
          {/* navlinks */}
          <ul className='list-none sm:flex hidden justify-end items-center flex-1 ml-6'>
            {navLinks.map((nav, index) => (
              // <div key={nav.id}>
              <li key={nav.id}
                className={` text-[16px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}
              >


                <Link
                  to={nav.id}
                  // className="active"
                  className={` ${isActive(nav) ? 'active' : 'active'}`}

                >
                  {nav.title}
                </Link>
              </li>
              // </div>
            ))}
            <div className="sm:ml-10 ml-0 sm:mt-0 mt-10">
            </div>
          </ul>

        </div>



      </div>



      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <div className=' self-end'>
          <div className='flex sm:hidden items-end justify-end gap-2'>

            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <AiFillLinkedin size={20} />
          </div>
        </div>
        <div onClick={toggleMenu} className={`z-[60]  ml-2 toggle-icon ${toggle ? 'Isactive' : ''}`}>
          {!toggle ? <AiOutlineMenu size={26} /> : <AiOutlineClose size={26} className=' text-white' />}
        </div>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 fixed top-0 right-0 bottom-0 z-50 min-w-[100%]  bg-black  ${toggle ? 'sidebarr' : 'sidebar'}`}>
          <ul className='list-none flex flex-col justify-center items-center flex-1 text-black'>
            {navLinks.map((nav, index) => (
              <li key={nav.id}
                className={`text-[34px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-7'} `}
              >

                <Link
                  to={nav.id}
                  onClick={closeMenuOnClick}

                  className={` ${isActive(nav) ? 'active' : 'active'}`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            </div>
          </ul>

        </div>

      </div>

      <div className='hidden sm:flex items-center justify-center gap-2'>
        <FaFacebookF size={20} />
        <FaTwitter size={20} />
        <AiFillLinkedin size={20} />
      </div>
    </nav>
  )
}

export default Navbar
