import { StaticImageData } from "next/image";

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