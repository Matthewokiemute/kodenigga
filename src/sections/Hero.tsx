import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import memojiImage2 from "@/assets/images/plain-me.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-40 lg:py-40 relative overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage})`,
        }}
      ></div>
      <div className="size-[1400px] hero-ring"></div>
      <div className="size-[1200px] hero-ring"></div>
      <div className="size-[900px] hero-ring"></div>
      <div className="size-[680px] hero-ring"></div>
      <HeroOrbit size={800} rotation={5}>
        <StarIcon className="size-20" />
      </HeroOrbit>
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <Image
            src={memojiImage2}
            alt="My picture"
            className="size-[200px] object-cover rounded-full grayscale-[90%] scale-110"
          />
          <div className="bg-black border border-white px-4 py-1.5 inline-flex items-center gap-2 rounded-lg">
            <div className="bg-green-500 size-2.5 animate-pulse rounded-full"></div>
            <div className="text-sm text-white">Available for new projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="text-center mt-4 text-gray-500 md:text-lg">
            Crafting websites that are beautiful, compelling & performant for
            disruptive startups and creators.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link href="https://github.com/Matthewokiemute" target="_blank" className="inline-flex items-center gap-2 border border-black/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            {/* <ArrowDown className="size-4" /> */}
            <Image
            src={memojiImage}
            alt="My picture"
            className="size-[24px] object-cover rounded-full grayscale-[90%] scale-110"
          />
          </Link>
          <Link href="https://x.com/kodenigga" target="_blank" className="text-gray-400 h-12 px-6 inline-flex items-center bg-black rounded-xl gap-2 border border-black">
            <span className="font-semibold">👋</span>
            <span className="font-semibold">Let&apos;s Work</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
