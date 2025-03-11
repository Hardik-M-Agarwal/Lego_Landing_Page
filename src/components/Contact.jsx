import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} className="w-full h-full object-cover" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-6 md:px-10">
      <div className="relative rounded-xl bg-black py-16 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-10 top-0 hidden h-full w-64 overflow-hidden sm:block lg:left-16 lg:w-80">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-32 translate-y-48"
          />
        </div>

        <div className="absolute -top-32 left-16 w-52 sm:top-1/2 md:left-auto md:right-8 lg:top-16 lg:w-72">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-110"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-110"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-8 font-sans text-xs uppercase tracking-wide">
            Join Lego Community
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> Blocks t<b>o</b>gether."
            className="special-font w-full font-bold text-4xl leading-tight md:text-6xl lg:text-7xl"
          />

          <Button title="contact us" containerClass="mt-8 cursor-pointer px-6 py-3 text-lg font-medium bg-blue-600 rounded-lg hover:bg-blue-500 transition" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
