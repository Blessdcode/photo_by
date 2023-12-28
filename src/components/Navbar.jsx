import { useState } from 'react'
import { navLinks } from '../constants/main'
import { logo } from '../assets'
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import styles from '../styles'
import { NavLink, Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle)
  }
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
        <div onClick={toggleMenu} className={`toggle-icon ${toggle ? 'Isactive' : ''}`}>
          {!toggle ? <AiOutlineMenu size={26} /> : <AiOutlineClose size={26} />}
        </div>

        <div className={`${toggle ? 'block' : 'hidden'} p-6 bg-black-gradient absolute top-16 right-0 z-50 min-w-[100%]  bg-black sidebar `}>
          <ul className='list-none flex flex-col justify-end items-end flex-1 text-black'>
            {navLinks.map((nav, index) => (
              <li key={nav.id}
                className={`text-[24px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-7'} `}
              >
            
            <Link
                  to={nav.id}
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
