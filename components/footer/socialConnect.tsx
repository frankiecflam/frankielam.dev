import NextLink from "../ui/nextLink";
import { motion } from "framer-motion";

interface Social {
  name: string;
  href: string;
}

const SOCIALS: Social[] = [
  { name: "Email", href: "mailto:cfl.frankie@gmail.com" },
  { name: "Twitter", href: "https://twitter.com/frankiecflam" },
  { name: "GitHub", href: "https://github.com/frankiecflam" },
];

export default function SocialConnect() {
  return (
    <div className="flex flex-col-reverse items-center gap-y-20 px-4 lg:flex-row lg:justify-between">
      <div>
        <motion.p
          className="text-center text-lg font-bold"
          initial={{ x: "-100px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Designed & Built by Frankie Lam
        </motion.p>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <motion.p
          className="text-center text-5xl font-bold first-letter:uppercase lg:text-4xl"
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          connect with me
        </motion.p>
        <ul className="flex flex-col gap-y-3">
          {SOCIALS.map((social) => (
            <motion.li
              key={social.name}
              initial={{ y: "100px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <NextLink
                href={social.href}
                className="text-3xl capitalize tracking-wide text-black-200 transition-all duration-300 hover:text-black dark:text-white-200 hover:dark:text-white"
                target="_blank"
              >
                {social.name}
              </NextLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
