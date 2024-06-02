import { Contact, GalleryHorizontalEnd, PhoneIncoming } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-[#1DC1D0] via-[#733AE3] to-[#733AE3] h-screen lg:h-[calc(100vh-7rem)] sm:bg-cover object-cover bg-center bg-no-repeat">
      <div className="grid lg:grid-cols-2 gap-y-8 items-center h-full max-width">
        <div className="text">
          <p className="mb-3 text-accent">Hello there, welcome to my website</p>
          <h1 className="font-bold text-5xl mb-8 text-accent">
            I&apos;m Jeffrey Valerio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DC1D0] to-[#1DC1D0]">
              A Full Stack Developer
            </span>
            <br />
            &amp; UI/UX Designer
          </h1>
          <div className="flex items-center gap-x-3">
            <button className="px-4 py-2 rounded-full bg-primary text-accent flex items-center gap-x-2">
               Portfolio
              <GalleryHorizontalEnd size={18} className="flex-shrink-0" />
            </button>
            <button className="px-4 py-2 rounded-full bg-primary text-accent flex items-center gap-x-2">
              Hire me <PhoneIncoming size={18} className="flex-shrink-0" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-end items-center">
          <Image
            src="https://placehold.co/450x550.png"
            alt=""
            width={450}
            height={550}
            className="border-8 border-black justify-end rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
