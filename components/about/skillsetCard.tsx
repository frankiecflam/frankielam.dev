"use client";
import { Skillset } from "@/types";
import { LiHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface SkillsetCardProps extends Skillset {
  className?: string;
}

export default function SkillsetCard({
  categoryName,
  stack,
  className,
}: SkillsetCardProps & LiHTMLAttributes<HTMLLIElement>) {
  return (
    <motion.li
      className={`mx-auto flex min-h-[200px] w-full flex-col gap-y-6 rounded-md p-6 ring-2 ring-white-300 transition-all duration-300 hover:scale-x-110 hover:ring-4 hover:ring-black-100 hover:dark:ring-white-100 sm:w-[450px]  ${
        className ? className : ""
      }`}
      initial={{ x: "0", y: "100px", opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <p className="text-center text-2xl font-medium capitalize text-black-200 dark:text-white-100">
        {categoryName}
      </p>
      <ul className="grid items-center gap-2 text-center sm:grid-cols-2 sm:text-left">
        {stack.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ul>
    </motion.li>
  );
}
