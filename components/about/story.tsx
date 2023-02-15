"use client";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <motion.div
      initial={{ y: "100px" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="mx-auto mt-6 flex max-w-[700px] flex-col gap-y-6">
        <p className="text-xl leading-[130%] tracking-wide text-black dark:text-white">
          Hi, I&#39;m Frankie. I am a self-taught developer with a passion for
          building things that live on the internet.
        </p>
        <p className="text-xl leading-[130%] tracking-wide text-black dark:text-white">
          My journey as a self-taught programmer started in May 2021 when I
          decided to take back control of my life from being in a rut and
          directionless. It turns out choosing to embark on this journey is one
          of the best decisions I have made in my life. I am glad that I had the
          courage to make that decision.
        </p>
        <p className="text-xl leading-[130%] tracking-wide text-black dark:text-white">
          Before I started this journey, I never thought of building websites
          and applications. I never felt interested in coding. Code seemed
          strange to me as if they were just a bunch of random characters that
          work together as a whole on computer. But, I was wrong. From this
          journey, I have realised programming is never about the code itself.
          It is all about problem-solving — how things work the way they do.
        </p>
        <p className="text-xl leading-[130%] tracking-wide text-black dark:text-white">
          Since I was a kid, I have always been curious about a lot of things
          that happen around me. I have always got something new to learn to
          feed my curiosity. I have never felt tired of learning because there
          is always a tremendous amount of joy within the process.
        </p>
        <p className="text-xl leading-[130%] tracking-wide text-black dark:text-white">
          But, as I grew order and started thinking about what career I should
          pursue, I felt immensely difficult finding one that both presents joy
          and opportunities for continuous learning. It seemed to me that there
          was no such thing as a right career, and I started falling into a trap
          of thinking that career should never be chosen based on interests.
          Because of this toxic thinking, I settled for jobs that I didn’t
          enjoy. I felt miserable living my life in this way, and my mental
          health took a deep dive because of it.
        </p>
        <p className="text-xl leading-[130%] tracking-wide text-black dark:text-white">
          In May 2021, I quit my sales and marketing job, and started my
          programming journey because I didn’t believe my life should have been
          lived in such a miserable way. Since then, I have always been feeling
          happy. Every day, I learn, I code and I build. I learn my areas of
          weakness in programming. I code with all the knowledge I have learnt.
          I build websites and applications with experience from everything I
          have coded.
        </p>
        <p className="text-xl leading-[130%] tracking-wide text-black dark:text-white">
          Because of programming, I feel happy living my life every day.
        </p>
      </div>
    </motion.div>
  );
}
