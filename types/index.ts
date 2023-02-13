import { StaticImageData } from "next/image";
import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

export interface Project {
  date: string;
  title: string;
  gitHubUrl: string;
  websiteUrl: string;
  thumbnail: StaticImageData;
  stack: string[];
}

export interface Skillset {
  categoryName: string;
  stack: string[];
}

export interface Journey {
  icon: ReactElement<IconType>;
  date: string;
  renderDescription: () => ReactNode;
}
