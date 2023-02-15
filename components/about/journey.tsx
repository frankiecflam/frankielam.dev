"use client";
import { BiWalk as WalkIcon } from "react-icons/bi";
import { BsCodeSlash as CodeIcon } from "react-icons/bs";
import { GoBrowser as BrowserIcon } from "react-icons/go";
import { SiJavascript as JSIcon } from "react-icons/si";
import { FaMobileAlt as MobileIcon } from "react-icons/fa";
import { FaSass as SassIcon } from "react-icons/fa";
import { BsBootstrapFill as BootstrapIcon } from "react-icons/bs";
import { FaReact as ReactIcon } from "react-icons/fa";
import { IoIosBuild as BuildIcon } from "react-icons/io";
import { SiTypescript as TSIcon } from "react-icons/si";
import { MdOutlineFactCheck as TestIcon } from "react-icons/md";
import { GiStoneCrafting as RebuildIcon } from "react-icons/gi";
import { GrServers as ServerIcon } from "react-icons/gr";
import { SiTailwindcss as TailwindIcon } from "react-icons/si";
import { BsCompass as CompassIcon } from "react-icons/bs";

import { Journey as JourneyType } from "@/types";
import JourneyItem from "./journeyItem";
import JourneyItemLink from "./journeyItemLink";
import { motion } from "framer-motion";

const JOURNEY: JourneyType[] = [
  {
    icon: <WalkIcon />,
    date: "may 2021",
    renderDescription() {
      return <p>I started programming.</p>;
    },
  },
  {
    icon: <CodeIcon />,
    date: "jul 2021",
    renderDescription() {
      return (
        <p>
          I finished my first computer science course — CS50, with C and Python.
        </p>
      );
    },
  },
  {
    icon: <BrowserIcon />,
    date: "nov 2021",
    renderDescription() {
      return (
        <p>
          I finished my first web development course — CS50WEB, with Python and
          JavaScript.
        </p>
      );
    },
  },
  {
    icon: <JSIcon />,
    date: "dec 2021",
    renderDescription() {
      return (
        <p>
          I finished my first JavaScript course on Udemy, and decided to be
          focused on web development.
        </p>
      );
    },
  },
  {
    icon: <MobileIcon />,
    date: "jan 2022",
    renderDescription() {
      return <p>I learnt mobile responsiveness.</p>;
    },
  },
  {
    icon: <SassIcon />,
    date: "feb 2022",
    renderDescription() {
      return (
        <p>
          I learnt SASS, and created a landing page —{" "}
          <JourneyItemLink href="https://frankie-sunnyside.netlify.app">
            Sunnyside
          </JourneyItemLink>{" "}
          , with it.
        </p>
      );
    },
  },
  {
    icon: <BootstrapIcon />,
    date: "mar 2022",
    renderDescription() {
      return (
        <p>
          I learnt Bootstrap 5 and created 2 landing pages —{" "}
          <JourneyItemLink href="https://frankie-easybank.netlify.app">
            Easybank
          </JourneyItemLink>{" "}
          &{" "}
          <JourneyItemLink href="https://frankie-bookmark.netlify.app">
            Bookmark
          </JourneyItemLink>{" "}
          , with it.
        </p>
      );
    },
  },
  {
    icon: <ReactIcon />,
    date: "apr 2022",
    renderDescription() {
      return <p>I learnt React and Next.js.</p>;
    },
  },
  {
    icon: <BuildIcon />,
    date: "may 2022",
    renderDescription() {
      return (
        <p>
          I built a food ordering web app —{" "}
          <JourneyItemLink href="https://zestyburgers.netlify.app">
            Zesty Burgers
          </JourneyItemLink>{" "}
          with React.
        </p>
      );
    },
  },
  {
    icon: <BuildIcon />,
    date: "jun 2022",
    renderDescription() {
      return (
        <p>
          I built a social media web app —{" "}
          <JourneyItemLink href="https://hiddengems.vercel.app">
            Hidden Gems
          </JourneyItemLink>{" "}
          with React and Next.js.
        </p>
      );
    },
  },
  {
    icon: <TSIcon />,
    date: "jul 2022",
    renderDescription() {
      return (
        <p>
          I learnt TypeScript and built an e-commerce app —{" "}
          <JourneyItemLink href="https://nutslab.vercel.app">
            Nuts Lab
          </JourneyItemLink>{" "}
          with React, Next.js and TypeScript.
        </p>
      );
    },
  },
  {
    icon: <TestIcon />,
    date: "aug 2022",
    renderDescription() {
      return <p>I learnt unit testing with Jest and React Testing Library.</p>;
    },
  },
  {
    icon: <RebuildIcon />,
    date: "oct 2022",
    renderDescription() {
      return (
        <p>
          I rebuilt{" "}
          <JourneyItemLink href="https://hiddengems-ts.vercel.app">
            Hidden Gems
          </JourneyItemLink>{" "}
          with TypeScript and React Query for better user experience.
        </p>
      );
    },
  },
  {
    icon: <ServerIcon />,
    date: "nov 2022",
    renderDescription() {
      return (
        <p>
          I learnt NodeJS, REST API and GraphQL for better understanding of how
          frontend and backend work together.
        </p>
      );
    },
  },
  {
    icon: <TailwindIcon />,
    date: "dec 2022",
    renderDescription() {
      return (
        <p>
          I learnt Tailwind CSS and built a landing page —{" "}
          <JourneyItemLink href="https://frankie-manage-tailwind.vercel.app">
            Manage
          </JourneyItemLink>{" "}
          &{" "}
          <JourneyItemLink href="https://frankie-metaverse-tailwind.vercel.app">
            Metaverse
          </JourneyItemLink>{" "}
          , with it.
        </p>
      );
    },
  },
  {
    icon: <CompassIcon />,
    date: "jan 2023",
    renderDescription() {
      return (
        <p>
          I learnt design patterns of React, authentication & authorisation,
          SQL, Prisma, TDD and web accessibility.
        </p>
      );
    },
  },
];

export default function Journey() {
  return (
    <div>
      <div className="mb-10">
        <p className="section-title text-center">journey timeline</p>
        <p className="section-description text-center">
          how has my journey been so far ...
        </p>
      </div>
      <div className="relative">
        <ul className="flex flex-col items-center gap-y-60">
          {JOURNEY.map((item, index) => (
            <JourneyItem
              key={index}
              {...item}
              positionOnTimeline={index % 2 === 0 ? "right" : "left"}
            />
          ))}
          <motion.div
            className="bg-white py-4 dark:bg-black"
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ul className="flex flex-col items-center gap-y-4 ">
              {Array.from({ length: 3 }, (_, index) => (
                <motion.li
                  key={index}
                  className="h-5 w-5  rounded-full bg-black-300 dark:bg-white-200"
                  initial={{ transform: "scale(3)" }}
                  whileInView={{ transform: "scale(1)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.33 }}
                />
              ))}
            </ul>
            <motion.p
              className="mt-6 text-2xl font-semibold text-black-100 dark:text-white-100"
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.66, ease: "easeOut" }}
            >
              More to come ...
            </motion.p>
          </motion.div>
        </ul>
        <div className="absolute top-0 left-1/2 -z-10 h-full w-[3px] -translate-x-1/2 bg-white-300" />
      </div>
    </div>
  );
}
