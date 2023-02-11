import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import About from "@/components/about/about";

export default function Home() {
  return (
    <main className="text-black dark:text-white">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
