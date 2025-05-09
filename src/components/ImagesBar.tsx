import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import robWilson from '../assets/rob-wilson-1_bK_F0U43o-unsplash.jpg';
import tobiasTullius from '../assets/tobias-tullius-ns_2zRjVojg-unsplash.jpg';
import tyWilliams from '../assets/ty-williams-YtVglBZ1p34-unsplash.jpg';

const ImagesBar = () => {
  const images = [{
    src: robWilson,
    alt: "Vein treatment procedure"
  }, {
    src: tobiasTullius,
    alt: "Patient consultation"
  }, {
    src: tyWilliams,
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