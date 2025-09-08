import styles from "../../styles";
import { pic11, pic12, pic13, pic14 } from "../../assets";

const galleryItems = [
  {
    id: 1,
    img: pic13,
    title: "Studio Portraits",
    description:
      "Dramatic lighting and bold compositions that capture your essence.",
  },
  {
    id: 2,
    img: pic11,
    title: "Outdoor Sessions",
    description:
      "Storytelling through natural light, landscapes, and urban backdrops.",
  },
  {
    id: 3,
    img: pic14,
    title: "Event Coverage",
    description:
      "Cinematic captures of weddings, celebrations, and milestones.",
  },
  {
    id: 4,
    img: pic12,
    title: "Fashion & Editorial",
    description: "Striking, styled images perfect for magazines and campaigns.",
  },
 
];

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
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-all duration-500"
            />
            {/* <div className="absolute inset-0 flex flex-col justify-end p-6 transition duration-500 opacity-0 bg-black/50 group-hover:opacity-100">
              <h3 className="mb-2 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mb-4 text-sm text-gray-200">{item.description}</p>
              <button className="px-4 py-2 text-black transition bg-white rounded-md shadow btn w-fit hover:bg-gray-200">
                Explore More
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
