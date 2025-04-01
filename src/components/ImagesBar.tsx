
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ImagesBar = () => {
  const images = [
    {
      src: "/src/assets/rob-wilson-1_bK_F0U43o-unsplash.jpg",
      alt: "Vein treatment procedure"
    },
    {
      src: "/src/assets/tobias-tullius-ns_2zRjVojg-unsplash.jpg",
      alt: "Patient consultation"
    },
    {
      src: "/src/assets/ty-williams-YtVglBZ1p34-unsplash.jpg",
      alt: "Modern vein treatment facility"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <AspectRatio ratio={4/3} className="bg-muted">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImagesBar;
