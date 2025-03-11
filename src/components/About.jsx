import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to("#clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
  <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
    <p className="text-sm uppercase md:text-xs">Welcome to Lego</p>

    <AnimatedTitle
      title="Build your world, <br /> brick by brick"
      containerClass="mt-5 text-amber-500 text-center text-lg sm:text-xl md:text-2xl word-spacing-wide"
    />

    <div className="text-center text-base">
      <p>Your imagination, now a limitless playground</p>
      <p className="text-gray-500">
        Lego unites creators of all ages—turning simple blocks into
        endless possibilities in a world where you build, play, and explore
        without limits.
      </p>
    </div>
  </div>


      <div className="h-dvh w-screen" id="clip">
        <div id="clip-path" className="overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
          <img
            src="img/about-1.jpeg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
