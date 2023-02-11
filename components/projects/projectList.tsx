import ProjectItem from "./projectItem";
import { Project as Project } from "@/types";
import hiddenGemsThumbnail from "@/public/images/projects/thumbnail_hiddengems.webp";
import nutsLabThumbnail from "@/public/images/projects/thumbnail_nutslab.webp";
import zestyBurgersThumbnail from "@/public/images/projects/thumbnail_zestyburgers.webp";
import manageThumbnail from "@/public/images/projects/thumbnail_manage.webp";

const PROJECTS: Project[] = [
  {
    date: "oct 2022",
    title: "Hidden Gems — social media app",
    gitHubUrl: "https://github.com/frankiecflam/next-hidden-gems-ts",
    websiteUrl: "https://hiddengems-ts.vercel.app/",
    thumbnail: hiddenGemsThumbnail,
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "React Query",
      "CSS",
      "Firebase",
      "Git",
    ],
  },
  {
    date: "jul 2022",
    title: "Nuts Lab — e-commerce app",
    gitHubUrl: "https://github.com/frankiecflam/nuts-lab",
    websiteUrl: "https://nutslab.vercel.app/",
    thumbnail: nutsLabThumbnail,
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "React Query",
      "React Testing Library",
      "Jest",
      "CSS",
      "Firebase",
      "Git",
    ],
  },
  {
    date: "may 2022",
    title: "Zesty Burgers — food ordering app",
    gitHubUrl: "https://github.com/frankiecflam/react-zesty-burgers",
    websiteUrl: "https://zestyburgers.netlify.app",
    thumbnail: zestyBurgersThumbnail,
    stack: [
      "React",
      "Redux",
      "React Router",
      "React Query",
      "Jest",
      "CSS",
      "Firebase",
      "Git",
    ],
  },
  {
    date: "mar 2022",
    title: "Manage — responsive landing page",
    gitHubUrl: "https://github.com/frankiecflam/manage-landing-page",
    websiteUrl: "https://frankie-manage.netlify.app/",
    thumbnail: manageThumbnail,
    stack: ["HTML", "SASS", "JavaScript"],
  },
];

export default function ProjectList() {
  return (
    <ul className="project-list grid gap-20 lg:grid-cols-2">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </ul>
  );
}
