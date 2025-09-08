import React from "react";
import styles from "../../styles";
import { logo, pic4 } from "../../assets";
import { Brands } from "../../constants/main";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="my-8 border-b border-black">
      <section
        className={`flex flex-col md:flex-row items-start justify-between ${styles.paddingX} ${styles.paddingY}`}
      >
        {/* Left Section */}
        <div className="flex flex-col items-start flex-[1.5]">
          <div className="relative">
            <span className="w-[15px] h-[15px] rounded-full bg-black absolute bottom-[45%] right-[-25px]" />
            <h3 className={`${styles.heading3} py-8 uppercase`}>About</h3>
          </div>

          <div className={`${styles.flexCenter} py-1 md:py-4`}>
            <span className={`mr-2 ${styles.heading2} uppercase`}>PhotoBy</span>
            <img
              src={logo}
              alt="Blak Naira brand logo"
              className="w-[28px] md:w-[41px]"
            />
          </div>

          <img
            src={pic4}
            alt="Portrait representing Blak Naira's photography style"
            className="h-[228px] object-cover object-center rounded-lg"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-10">
          <p className="text-[16px] md:text-[18px] leading-relaxed text-justify">
            Blak Naira is a visionary photographer whose work transcends the
            ordinary, weaving together creativity, cinematic flair, and dramatic
            artistry under the distinctive banner of their brand, Blak Naira.
            With a keen eye for storytelling through light, shadow, and
            composition, Blak Naira's photography captures the essence of
            fleeting moments and transforms them into timeless visual narratives.
            <br />
            <br />
            Specializing in creative and cinematic photography, Blak Naira
            masterfully blends bold, evocative aesthetics with a deep
            appreciation for the artistic potential of every frame. Their
            portfolio is a testament to a passion for pushing boundaries, where
            each image is a carefully crafted piece of art, rich with emotion and
            atmosphere.
            <br />
            <br />
            Whether exploring the interplay of color and mood or crafting
            striking, theatrical scenes, Blak Naira invites viewers into a world
            where every photograph tells a profound story, unmistakably marked by
            the unique creative vision of the Blak Naira brand.
          </p>

          <button className="py-[14px] px-[24px] md:px-[48px] bg-black text-white font-medium rounded-full my-4 hover:bg-gray-900 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Brands/Collaborations */}
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 mt-6 mb-8">
        {Brands.map((brand) => (
          <div key={brand.id} className="flex items-center justify-center">
            <img
              src={brand.img}
              alt={`${brand.id} logo`}
              className="h-[40px] md:h-[50px] object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
