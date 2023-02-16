"use client";
import { Kaisei_HarunoUmi } from "@next/font/google";
import Balancer from "react-wrap-balancer";
import HeroCtaLink from "./heroCtaLink";
import Section from "../ui/section";
import ScrollLink from "../ui/scrollLink";
import { motion } from "framer-motion";

const kaisei = Kaisei_HarunoUmi({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <Section className="relative min-h-screen pt-20 sm:pt-44" id="home">
      <div className="flex flex-col gap-y-5 py-10 md:w-4/5">
        <motion.h1
          className={`text-5xl md:text-6xl  ${kaisei.className}`}
          initial={{ y: "50px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I am Frankie Lam.
        </motion.h1>
        <motion.p
          className="text-3xl font-medium text-black-100 dark:text-white-100 md:text-4xl"
          initial={{ y: "-1.5rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Balancer>I build interactive user experiences with code.</Balancer>
        </motion.p>
        <motion.p
          className="text-xl font-light text-black-100 dark:text-white-100 md:text-2xl"
          initial={{ y: "-15px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Balancer>
            I am a self-taught frontend developer based in London. I enjoy
            building things that live on the internet through curiosity and
            perseverance. Always learning, exploring and experimenting.
          </Balancer>
        </motion.p>
        <motion.div
          className="mt-8 flex items-center gap-x-6"
          initial={{ y: "-40px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <HeroCtaLink
            href="projects"
            className="bg-[#397F7A] text-center text-xl text-white-100 ring-2 ring-[#397F7A] md:text-2xl"
          >
            view projects
          </HeroCtaLink>
          <HeroCtaLink
            href="about"
            className="text-center text-xl text-black-100 ring-2 ring-[#397F7A]  dark:text-white-100 md:text-2xl"
          >
            know about me
          </HeroCtaLink>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-5 left-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
      >
        <ScrollLink
          title="scroll down to view projects"
          className="after:scroll-down  flex  h-8 w-5 -translate-x-1/2 cursor-pointer items-center justify-center rounded-[25px] border-2 border-black-100 after:block  after:h-[5px] after:w-[5px] after:rounded-full after:bg-black-100 after:content-[''] dark:border-white-100 after:dark:bg-white-100 sm:flex"
          to="projects"
        />
      </motion.div>
    </Section>
  );
}
