
import Button from "./Button";

interface ImageClipProps {
  src: string;
  clipClass: string;
}

const ImageClipBox = ({ src, clipClass }: ImageClipProps) => (
  <div className={clipClass}>
    <img src={src} className="w-full h-auto" alt="" />
  </div>
);

function Contact() {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Imágenes a la izquierda */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox clipClass="contact-clip-path-1" src="img/contact-1.webp" />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="img/contact-2.webp"
          />
        </div>

        {/* Imagen del jugador a la derecha */}
        <div className="absolute right-0 top-1/2 w-60 transform -translate-y-1/2 md:w-80 lg:w-96">
          <ImageClipBox
            src="img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Contenido central */}
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Join Zentry</p>
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let&apos;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether
          </p>
          <Button id="contact-button" title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
