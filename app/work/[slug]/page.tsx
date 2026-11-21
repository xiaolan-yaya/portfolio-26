import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="case">
      <h1>{project.title}</h1>
      <p className="meta">{project.role} · {project.year}</p>
      <p>{project.summary}</p>
      {/* Write the case study here: problem, research, process, solution, outcome */}
    </article>
  );
}
