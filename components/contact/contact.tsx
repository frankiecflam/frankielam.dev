import Section from "../ui/section";
import NextLink from "../ui/nextLink";
import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <Section className="contact">
      <header className="section-header mb-10 text-center">
        <h2 className="section-title">contact</h2>
        <p className="section-description mx-auto max-w-[800px]">
          If you fancy a chat, feel free to contact me on{" "}
          <NextLink
            href="mailto:cfl.frankie@gmail.com"
            className="relative origin-center  text-2xl font-normal text-black-300 after:scale-100 hover:text-black-100 dark:text-white-300 hover:dark:text-white-100"
          >
            cfl.frankie@gmail.com
          </NextLink>
        </p>
      </header>
      <div>
        <ContactForm />
      </div>
    </Section>
  );
}
