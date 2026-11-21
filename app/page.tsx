import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { site } from "@/site.config";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>welcome to<br /><em>yaya</em>’s portfolio</h1>
        <p className="note">{site.name} · {site.email}</p>
        <p className="note">(scroll to see my works!)</p>
      </section>

      <h2 id="projects" className="section-title">featured projects</h2>
      <div className="grid">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        <div className="coming"><p>more projects coming soon…</p></div>
      </div>
    </>
  );
}
