import Section from "../ui/section";
import ProjectList from "./projectList";

export default function Projects() {
  return (
    <Section>
      <header className="section-header text-center">
        <h2 className="section-title">projects</h2>
        <p className="section-description">
          here are some things I have built.
        </p>
      </header>
      <div>
        <ProjectList />
      </div>
    </Section>
  );
}
