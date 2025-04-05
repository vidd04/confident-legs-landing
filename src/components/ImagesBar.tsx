import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ImagesBar = () => {
  const images = [{
    src: "/src/assets/rob-wilson-1_bK_F0U43o-unsplash.jpg",
    alt: "Vein treatment procedure"
  }, {
    src: "/src/assets/tobias-tullius-ns_2zRjVojg-unsplash.jpg",
    alt: "Patient consultation"
  }, {
    src: "/src/assets/ty-williams-YtVglBZ1p34-unsplash.jpg",
    alt: "Modern vein treatment facility"
  }];

  return (
    <section className="bg-white py-0 my-0">
      <div className="-mx-4 lg:mx-auto lg:container">
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="w-1/3">
              <AspectRatio ratio={4 / 3}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
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