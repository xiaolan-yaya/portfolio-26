import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const stack = ["Figma", "Claude", "Cursor", "Vercel", "GitHub"];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Hi, I'm Yaya.</h1>
        <p>
          Interaction design student at the University of Washington, working across
          UX research, product design and brand identity.
        </p>
      </section>

      <h2 id="work" className="section-title">Selected work</h2>
      <div className="grid">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>

      <h2 className="section-title">My stack</h2>
      <div className="stack">
        {stack.map((s) => <span key={s}>{s}</span>)}
      </div>
    </>
  );
}
