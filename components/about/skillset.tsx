import { Skillset as SkillsetType } from "@/types/index";
import SkillsetCard from "./skillsetCard";

const SKILLSETS: SkillsetType[] = [
  {
    categoryName: "programming languages",
    stack: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SASS",
      "GraphQL",
      "SQL",
    ],
  },
  {
    categoryName: "frameworks & libraries",
    stack: [
      "React",
      "Redux",
      "React Router",
      "React Query",
      "React Testing Library",
      "Jest",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
      "Apollo",
      "Prisma",
    ],
  },
  {
    categoryName: "tools & platforms",
    stack: ["Git", "Vercel", "Firebase", "Supabase"],
  },
];

export default function Skillset() {
  return (
    <div>
      <div className="mb-10">
        <p className="section-description text-center">
          the tools with which i build things.
        </p>
      </div>
      <ul className="relative flex flex-col gap-y-16">
        {SKILLSETS.map((skillset) => (
          <SkillsetCard
            key={skillset.categoryName}
            {...skillset}
            className="bg-white dark:bg-black"
          />
        ))}
        <div className="absolute left-1/2 top-0 -z-10 h-full w-[2px] bg-white-300" />
      </ul>
    </div>
  );
}
