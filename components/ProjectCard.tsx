import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="card">
      <div className="thumb">
        {project.cover && <img src={project.cover} alt="" />}
      </div>
      <div className="body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </Link>
  );
}
