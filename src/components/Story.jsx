import React from "react";

const Story = () => {
  const story = `LEGO's journey began in 1932 in a small workshop in Billund, Denmark, where a carpenter named Ole Kirk Christiansen started making wooden toys. 
  He believed in creating high-quality products that encouraged creativity and play. In 1936, he named his company LEGO, derived from the Danish words "Leg Godt," 
  meaning "Play Well"—a philosophy that would define the brand for decades to come.

  As the world evolved, so did LEGO. In 1947, the company shifted from wood to plastic and, by 1949, introduced the first version of LEGO bricks, 
  known as Automatic Binding Bricks. These early designs laid the foundation for the interlocking system, which was perfected in 1958. 
  The innovation allowed LEGO bricks to fit together securely, ensuring endless building possibilities while remaining compatible across generations.

  During the 1960s and 70s, LEGO expanded its offerings, introducing themed sets like LEGO Town, Castle, and Space. This move turned LEGO from 
  simple building blocks into a storytelling tool, where kids could create entire cities, medieval kingdoms, and futuristic worlds. 
  The introduction of LEGO Minifigures in 1978 brought characters into these sets, making play even more immersive.

  However, the 1990s brought challenges. With the rise of video games, action figures, and digital entertainment, LEGO struggled to maintain its appeal. 
  The company tried introducing new experimental products, but many failed to capture interest, leading to financial difficulties. By the early 2000s, LEGO was on the verge of collapse.

  The brand’s revival came through strategic partnerships and a renewed focus on storytelling. Licensing deals with Star Wars (1999), 
  Harry Potter (2001), and later Marvel and DC reintroduced LEGO to a new generation. At the same time, LEGO expanded into video games, 
  producing hit titles like LEGO Star Wars: The Video Game (2005), which combined humor, action, and creativity in an interactive way.

  LEGO didn't stop there. In 2014, it ventured into Hollywood with The LEGO Movie, a critically acclaimed success that further cemented LEGO’s 
  position in pop culture. The company also launched LEGO Ideas, allowing fans to submit designs for potential LEGO sets. 
  This initiative fostered a deep connection with its community, making LEGO not just a toy but a collaborative creative platform.

  Today, LEGO is one of the world's most powerful brands, spanning theme parks, robotics (LEGO Mindstorms & Spike), video games, animated series, 
  and even educational initiatives. From a small wooden toy company to a global empire of creativity, LEGO continues to inspire millions of builders worldwide—proving that with a few simple bricks, anything is possible.`;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-[400px] h-[400px]">
        {/* Image occupying full container */}
        <img
          src="/img/strory.jpeg"
          alt="LEGO"
          className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 hover:opacity-0 cursor-pointer"
        />

        {/* Story text appears on hover */}
        <p className="absolute inset-0 p-4 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gray-900 bg-opacity-90 rounded-lg overflow-auto">
          {story}
        </p>

        {/* "Know More" Button */}
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-600">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Story;
