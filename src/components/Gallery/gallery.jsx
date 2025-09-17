import { useState } from "react";
import styles from "../../styles";
import { galleryItems } from "../../constants/main";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className={`${styles.paddingX} my-16`}>
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

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="relative overflow-hidden transition-all duration-300 rounded-lg shadow-md cursor-pointer group hover:shadow-xl"
            onClick={() => openModal(item, index)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-all duration-500 grayscale hover:grayscale-0"
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

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={handleOverlayClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          style={{ outline: "none" }}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute text-white transition-colors top-4 right-4 z-60 hover:text-gray-300"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {galleryItems.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute text-white transition-colors transform -translate-y-1/2 left-4 top-1/2 hover:text-gray-300 z-60"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute text-white transition-colors transform -translate-y-1/2 right-4 top-1/2 hover:text-gray-300 z-60"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative flex items-center justify-center max-w-full max-h-full">
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg bg-gradient-to-t from-black via-black/70 to-transparent">
              <h3 className="mb-1 text-lg font-semibold text-white sm:text-xl">
                {selectedImage.title}
              </h3>
              {selectedImage.description && (
                <p className="text-sm text-gray-300 sm:text-base">
                  {selectedImage.description}
                </p>
              )}
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-400 sm:text-sm">
                  {currentIndex + 1} of {galleryItems.length}
                </span>
                <div className="flex space-x-1">
                  {galleryItems.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-white" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Touch/Swipe Instructions for mobile */}
          <div className="absolute text-xs text-gray-400 transform -translate-x-1/2 bottom-4 left-1/2 sm:hidden">
            Swipe left/right to navigate • Tap outside to close
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
