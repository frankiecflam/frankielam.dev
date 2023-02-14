import { StaticImageData } from "next/image";
import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";
import { z } from "zod";

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

export const nameSchema = z.string().min(1);
export const emailSchema = z.string().email();
export const messageSchema = z.string().min(1);

export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
});

export type ContactForm = z.infer<typeof contactFormSchema>;
