import { footerLinks } from "../constants/main";
import styles from "../styles";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingX} flex-col bg-black text-white py-12`}
  >
    {/* Top section: Logo + description */}
    <div className="flex flex-col items-start justify-between w-full mb-12 md:flex-row md:items-center">
      <div className="flex items-center gap-4">
        <span className="font-semibold sm:text-[64px] text-[28px] uppercase sm:leading-[76px] leading-[32px]">
          Black Naira
        </span>
      </div>
    </div>

    {/* Middle section: Newsletter + Links */}
    <div className="flex flex-col justify-between w-full gap-10 md:flex-row">
      {/* Footer links */}
      <div className="flex flex-wrap justify-between gap-6 md:gap-12">
        {footerLinks.map((section) => (
          <div key={section.key} className="flex flex-col min-w-[150px]">
            <h4 className="font-medium text-[18px] mb-4">{section.title}</h4>
            <ul className="space-y-2 list-none">
              {section.links.map((link) => (
                <li
                  key={link.name}
                  className="text-[16px] text-dimWhite hover:text-secondary cursor-pointer transition"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom note / copyright (optional) */}
    <p className="mt-12 text-[14px] text-dimWhite text-center">
      © {new Date().getFullYear()} Blak Naira. All rights reserved.
    </p>
  </section>
);

export default Footer;
