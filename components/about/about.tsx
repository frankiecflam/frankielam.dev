import Section from "../ui/section";
import Story from "./story";
import Skillset from "./skillset";

export default function About() {
  return (
    <Section>
      <header className="section-header mb-10 text-center">
        <h2 className="section-title">about</h2>
        <p className="section-description">Here is my stroy.</p>
      </header>
      <div className="flex flex-col gap-y-32">
        <Story />
        <Skillset />
      </div>
    </Section>
  );
}
