import NextLink from "../ui/nextLink";

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
        <p className="text-lg font-bold">Designed & Built by Frankie Lam</p>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <p className="text-5xl font-bold first-letter:uppercase lg:text-4xl">
          connect with me
        </p>
        <ul className="flex flex-col gap-y-3">
          {SOCIALS.map((social) => (
            <li key={social.name}>
              <NextLink
                href={social.href}
                className="text-3xl capitalize tracking-wide text-black-200 transition-all duration-300 hover:text-black dark:text-white-200 hover:dark:text-white"
                target="_blank"
              >
                {social.name}
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
