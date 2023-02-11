import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="text-black dark:text-white">
      <Hero />
      <Projects />
    </main>
  );
}
