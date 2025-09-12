import styles from "../../styles";
import { galleryItems } from "../../constants/main";

const Gallery = () => {
  return (
    <section className={`${styles.paddingX} my-16`}>
      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-12 text-center">
        <span className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] rounded-full bg-black inline-block mb-3"></span>
        <h2 className={`${styles.heading2} text-black uppercase`}>
          Gallery Showcase
        </h2>
        <p className={`${styles.paragraph} mt-4`}>
          A glimpse into our world of cinematic photography. Each image tells a
          story—crafted with passion, artistry, and emotion.
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-md "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-all duration-500 grayscale hover:grayscale-0"
            />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
