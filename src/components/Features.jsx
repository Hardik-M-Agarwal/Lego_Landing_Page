import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`${className} transition-transform duration-300`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, imgSrc, title }) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg border border-gray-700">
      {playVideo ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
        />
      ) : (
        <img
          src={imgSrc}
          alt="Feature Thumbnail"
          className="absolute left-0 top-0 w-full h-full object-cover object-center"
        />
      )}

      <div className="relative z-10 flex flex-col justify-between p-5 w-full h-full">
        <h1 className="text-xl md:text-2xl font-extrabold text-yellow-400">{title}</h1>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={() => setPlayVideo(!playVideo)}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            {playVideo ? "Stop" : "Preview"}
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-400 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section id ="products"className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 uppercase">
          Our <b>Products</b>
        </h2>
        <p className="mt-5 text-lg text-gray-200">Unleash Your Creativity</p>
        <p className="max-w-md mx-auto text-lg text-gray-400">
          Dive into a world of limitless possibilities—where every brick builds a new adventure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-7.mp4" imgSrc="img/product-1.jpeg" title="F1 Racer" />
        </BentoTilt>

        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-6.mp4" imgSrc="img/product-2.jpeg" title="LEGO Starfighter" />
        </BentoTilt>

        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-8.mp4" imgSrc="img/product-3.jpeg" title="Starcruiser" />
        </BentoTilt>

        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-10.mp4" imgSrc="img/product-4.jpeg" title="Bricklock Prison" />
        </BentoTilt>

        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-9.mp4" imgSrc="img/product-5.jpeg" title="Ninjago City" />
        </BentoTilt>

        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-11.mp4" imgSrc="img/product-6.jpeg" title="Temple City" />
        </BentoTilt>

        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-12.mp4" imgSrc="img/product-7.jpeg" title="Emerald City" />
        </BentoTilt>

        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-13.mp4" imgSrc="img/product-8.jpeg" title="Tudor Corner" />
        </BentoTilt>

        <BentoTilt className="h-[500px]">
          <BentoCard src="videos/feature-11.mp4" imgSrc="img/product-9.jpeg" title="Titanic" />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
