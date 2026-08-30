import Intro from "@/components/intro";
import Highlights from "@/components/highlights";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import GithubActivity from "@/components/github-activity";
import Contact from "@/components/contact";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
      <Intro />
      <Highlights />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GithubActivity />
      <Contact />
    </div>
  );
}
