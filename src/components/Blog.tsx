import React from 'react';

const Blog = () => {
  const articles = [
    {
      title: "Understanding Varicose Veins: Causes and Prevention",
      description: "Learn about the common causes of varicose veins and discover effective prevention strategies to maintain healthy leg circulation.",
      image: "/src/assets/iStock-541269710.jpg",
      date: "MAY 1, 2024"
    },
    {
      title: "Exercise Tips for Better Vein Health",
      description: "Explore recommended exercises and activities that can help improve circulation and reduce the risk of developing vein problems.",
      image: "/src/assets/iarwK34NqSZMtnwJQpqn8R-1000-80.jpg",
      date: "MAY 1, 2024"
    },
    {
      title: "Modern Vein Treatment Options Explained",
      description: "Discover the latest minimally invasive treatments available for varicose veins and learn which option might be right for you.",
      image: "/src/assets/rob-wilson-1_bK_F0U43o-unsplash.jpg",
      date: "MAY 1, 2024"
    }
  ];

  return (
    <section className="py-20 bg-[#FFF5F2]">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[36px] md:text-[48px] leading-[1.2] font-logo text-black">
            Latest Articles
          </h2>
          <a href="#" className="text-emergency-red hover:text-emergency-red/90 flex items-center gap-2">
            View All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.16666 7H12.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 1.16667L12.8333 7L7 12.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-none overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-logo text-black mb-3 hover:text-emergency-red transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
                <p className="text-sm text-emergency-red">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 