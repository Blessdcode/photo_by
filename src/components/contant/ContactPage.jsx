import styles from "../../styles";
import { pic5 } from "../../assets";

const ContactPage = () => {
  return (
    <section className={`${styles.paddingX} my-16`}>
      <div className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row">
        {/* Image */}
        <div className="w-full md:w-[480px] rounded-lg overflow-hidden">
          <img
            src={pic5}
            alt="Contact Blak Naira"
            className="object-cover w-full h-full filter grayscale"
          />
        </div>

        {/* Contact Form + Info */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px] rounded-full bg-black"></span>
            <h2 className={`${styles.heading2} text-black`}>Contact</h2>
          </div>

          <p className={`${styles.paragraph} mb-8 max-w-lg`}>
            Let’s create something unforgettable together. Whether it’s a
            portrait, event, or creative project, we’d love to hear from you.
            Fill out the form or reach us directly through the details below.
          </p>

          {/* Contact Details */}
          <div className="mb-10 space-y-3 text-sm">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@blaknaira.com" className="underline">
                hello@blaknaira.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="underline">
                +1 234 567 890
              </a>
            </p>
            <p>
              <strong>Follow:</strong>{" "}
              <a
                href="https://www.instagram.com/blak.naira.photography?igsh=a3U3N2hlZnhmd2V2&utm_source=qr"
                className="mr-2 underline"
              >
                Instagram
              </a>
              |
              <a
                href="https://x.com/blak_naira?s=21"
                className="mx-2 underline "
              >
                X
              </a>
              |
              <a href="http://wa.me/2348148046578" className="ml-2 underline">
                WhatsApp
              </a>
            </p>
          </div>

          {/* Form */}
          <form className="w-full max-w-xl">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-1 py-3 text-sm bg-transparent border-b-2 border-black focus:outline-none focus:border-gray-600 placeholder:text-gray-700"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-1 py-3 text-sm bg-transparent border-b-2 border-black focus:outline-none focus:border-gray-600 placeholder:text-gray-700"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-1 py-3 text-sm bg-transparent border-b-2 border-black focus:outline-none focus:border-gray-600 placeholder:text-gray-700"
              />
              <button
                type="submit"
                className="px-8 py-3 mt-4 font-medium text-black transition border-2 border-black rounded-full hover:bg-black hover:text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
