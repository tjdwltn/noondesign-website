import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function PortfolioCard({ project }: Props) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col border border-black/5 bg-white transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-accent-light">
        <Image
          src={project.images[0]?.src ?? "/placeholder.svg"}
          alt={project.images[0]?.alt ?? project.title}
          fill
          className="object-cover transition-transform transition-[filter] duration-300 group-hover:scale-[1.03] group-hover:brightness-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between px-4 py-4">
        <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-black/60">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium tracking-tightMinus">{project.title}</h3>
          {project.client && (
            <p className="text-xs text-black/60">
              Client <span className="mx-1">/</span> {project.client}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}




