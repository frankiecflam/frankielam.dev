import { Project as ProjectItemProps } from "@/types";
import NextLink from "@/components/ui/nextLink";
import Image from "next/image";
import { FaHammer as HammerIcon } from "react-icons/fa";
import Link from "next/link";

export default function ProjectItem(props: ProjectItemProps) {
  return (
    <li className="flex flex-col gap-y-10 rounded-md p-8">
      <div className="flex flex-col gap-y-5">
        <p className="project-date uppercase tracking-wide">{props.date}</p>
        <p className="project-title w-3/4 text-4xl font-bold">{props.title}</p>
        <div className="flex items-center gap-x-6">
          <NextLink
            href={props.gitHubUrl}
            className="project-link text-xl after:scale-100 after:opacity-20 hover:after:opacity-100"
            target="_blank"
          >
            GitHub
          </NextLink>
          <NextLink
            href={props.websiteUrl}
            className="project-link text-xl after:scale-100 after:opacity-20 hover:after:opacity-100"
            target="_blank"
          >
            Website
          </NextLink>
        </div>
      </div>
      <div className="flex-grow">
        <Link href={props.websiteUrl} target="_blank">
          <Image
            src={props.thumbnail}
            alt={`project thumbnail of ${props.title}`}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="min-h-[100px] border-t-[1px] border-white-300 pt-6">
        <div className="flex items-baseline gap-x-3">
          <div>
            <HammerIcon className="h-4 w-4 text-white-300" />
          </div>
          <p className="project-stack">{props.stack.join(", ")}</p>
        </div>
      </div>
    </li>
  );
}
