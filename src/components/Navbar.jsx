import { useState } from "react";
import { navLinks } from "../constants/main";
import { logo } from "../assets";
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const isActive = (nav) => `#${nav.id}` === location.pathname;

  return (
    <nav className="relative flex items-center justify-between py-6 md:px-12">
      {/* Logo */}
      <div className="flex items-center w-40 gap-12 md:w-52 ">
        <img src={logo} alt="Blak Naira Logo" className="w-full" />
      </div>

      {/* Desktop Nav Links */}
      <ul className="items-center justify-end flex-1 hidden gap-10 sm:flex">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <Link
              to={nav.id}
              className={`text-[16px] font-medium ${
                isActive(nav) ? "text-black underline" : "text-black"
              }`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-4 sm:hidden">
        <div onClick={() => setToggle(!toggle)} className="z-50 cursor-pointer">
          {!toggle ? (
            <AiOutlineMenu size={26} />
          ) : (
            <AiOutlineClose size={26} className="text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                to={nav.id}
                onClick={() => setToggle(false)}
                className={`text-[28px] font-medium text-white ${
                  isActive(nav) ? "underline" : ""
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Social Icons */}
        <div className="flex items-center gap-6 mt-12">
          <FaFacebookF
            size={24}
            className="cursor-pointer hover:text-gray-400"
          />
          <FaTwitter size={24} className="cursor-pointer hover:text-gray-400" />
          <AiFillLinkedin
            size={24}
            className="cursor-pointer hover:text-gray-400"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
