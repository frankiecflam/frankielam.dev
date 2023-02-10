import { Kaisei_HarunoUmi } from "@next/font/google";
import Balancer from "react-wrap-balancer";
import HeroCtaLink from "./heroCtaLink";

const kaisei = Kaisei_HarunoUmi({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section
      className="container relative mx-auto min-h-screen px-8 pt-44 pb-16 md:px-0"
      id="home"
    >
      <div className="flex flex-col gap-y-5 py-10 md:w-4/5">
        <h1 className={`text-5xl md:text-6xl  ${kaisei.className}`}>
          Hi, I am Frankie Lam.
        </h1>
        <p className="text-3xl font-medium text-black-100 dark:text-white-100 md:text-4xl">
          <Balancer>I build interactive user experiences with code.</Balancer>
        </p>
        <p className="text-xl font-light text-black-100 dark:text-white-100 md:text-2xl">
          <Balancer>
            I am a self-taught frontend developer based in London. I enjoy
            building things that live on the internet through curiosity and
            perseverance. Always learning, exploring and experimenting.
          </Balancer>
        </p>
        <div className="mt-8 flex items-center gap-x-6">
          <HeroCtaLink
            href="#projects"
            className="bg-[#397F7A] text-center text-xl text-white-100 ring-2 ring-[#397F7A] md:text-2xl"
          >
            view projects
          </HeroCtaLink>
          <HeroCtaLink
            href="#about"
            className="text-center text-xl text-black-100 ring-2 ring-[#397F7A]  dark:text-white-100 md:text-2xl"
          >
            know about me
          </HeroCtaLink>
        </div>
      </div>
      <button
        title="scroll down to view projects"
        className="after:scroll-down absolute bottom-5 left-1/2 flex  h-8 w-5 -translate-x-1/2 items-center justify-center rounded-[25px] border-2 border-black-100 after:block after:h-[5px]  after:w-[5px] after:rounded-full after:bg-black-100 after:content-[''] dark:border-white-100 after:dark:bg-white-100 sm:flex"
      />
    </section>
  );
}
