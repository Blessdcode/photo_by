import styles from "../../styles";
import { ServicesEl } from "../../constants/main";

const Services = () => {
  return (
    <div className="my-12 border-b border-black">
      <section
        className={`flex flex-col justify-between ${styles.paddingX} ${styles.paddingY} space-y-5`}
      >
        {/* Left Title Section */}
        <div className="flex flex-col items-start flex-[1.5] mb-8 md:mb-0">
          <div className="relative">
            <span className="w-[15px] h-[15px] rounded-full bg-black absolute bottom-[45%] right-[-25px]" />
            <h3 className={`${styles.heading3} py-8 uppercase`}>Services</h3>
          </div>
          <p className=" text-[16px] md:text-[18px] leading-relaxed text-gray-700">
            At Blak Naira, photography is more than capturing moments—it’s about
            crafting cinematic, dramatic, and timeless art. With a passion for
            storytelling through light, shadow, and emotion, we offer bespoke
            photography services tailored to your vision.
          </p>
        </div>

        {/* Right Services List */}
        <div className="grid flex-1 gap-10 sm:grid-cols-2">
          {ServicesEl.map((service) => (
            <div
              key={service.id}
              className="flex flex-col p-6 transition shadow-sm bg-Bground rounded-2xl hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex items-center justify-center bg-white rounded-full shadow-md w-14 h-14">
                <img
                  src={service.img}
                  alt={`${service.title} icon`}
                  className="object-contain w-8 h-8"
                />
              </div>

              {/* Title */}
              <h4 className="mt-6 mb-4 text-xl font-semibold tracking-wide text-black uppercase">
                {service.title}
              </h4>

              {/* Content */}
              <p className={`${styles.paragraph} text-[15px] leading-relaxed`}>
                {service.content}
              </p>

              {/* CTA Button (if exists) */}
              {service.cta && (
                <button className="mt-6 py-[10px] px-[20px] bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition">
                  {service.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
