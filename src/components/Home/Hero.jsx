import React, { useEffect, useState } from "react";
import styles from "../../styles";
import { pic1 } from "../../assets";
import { motion } from "framer-motion";

const textVariant = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const Hero = () => {
  const [dateTime, setDateTime] = useState({
    year: new Date().getFullYear(),
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    date: new Date().toLocaleDateString(),
  });

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime({
        year: new Date().getFullYear(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        date: new Date().toLocaleDateString(),
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`${styles.paddingX}`}>
      <div className="my-10 flex items-center justify-between">
        {/* Left Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariant}
          className="flex flex-col relative"
        >
          <div className="flex items-start">
            <span className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] rounded-full bg-black mt-1 sm:mt-3"></span>
            <h1 className={`${styles.heading2} text-black`}>
              BRAND <br /> RECOGNITION
            </h1>
          </div>

          <div className="flex items-center gap-4 mt-7">
            <p className={`${styles.paragraph} font-[500]`}>PHOTOGRAPHY</p>
            <span className="w-[40px] sm:w-[183px] h-[1px] bg-black"></span>
            <span className="w-[20px] h-[20px] rounded-full bg-black"></span>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="relative hidden md:block">
          <p className="text-[#0000000d] text-[48px] sm:text-[196px] font-[500]">
            {dateTime.year}
          </p>
          <p className="absolute bottom-[70px] right-[40px] text-[18px] sm:text-[28px] font-[500]">
            {dateTime.date} – {dateTime.time}
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full md:min-w-[1356px]">
        <img
          src={pic1}
          alt="Showcasing photography services"
          className="w-full h-[423px] md:h-full object-cover object-center rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
