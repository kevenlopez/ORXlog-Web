import { useState, useEffect } from 'react';

export default function DashboardSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f299b185e3adb9ce86cf9b72c8105c36db841c58?width=2000",
      alt: "ORXlog Dashboard - Overview"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/8ec4b77cc7293cfb11e0b001416001c7db7d0849?width=2000",
      alt: "ORXlog Dashboard - Analytics"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/6747e66ea6c74ae68d51982c15d1a1e50f8cb0b8?width=2000",
      alt: "ORXlog Dashboard - Alerts"
    }
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="px-6 mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative group">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentImage 
                    ? 'w-10 h-3 bg-orx-blue' 
                    : 'w-3 h-3 bg-orx-sky/20 hover:bg-orx-sky/40'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-orx-blue h-1 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${((currentImage + 1) / images.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
