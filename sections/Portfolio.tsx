import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, projects, type ProjectCategory } from "@/data/projects";
import { PortfolioCard } from "@/components/PortfolioCard";

const ALL = "All";

interface Props {
  limit?: number;
}

export function Portfolio({ limit }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>(ALL);

  const filtered = useMemo(() => {
    const base =
      activeFilter === ALL
        ? projects
        : projects.filter((project) => project.category === activeFilter);
    return typeof limit === "number" ? base.slice(0, limit) : base;
  }, [activeFilter, limit]);

  return (
    <section id="work" className="section-padding bg-[#f7f7f7]" aria-labelledby="work-heading">
      <div className="container">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="work-heading"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-black/60"
            >
              Selected Work
            </h2>
            <p className="mt-3 max-w-md text-xs text-black/65">
              noonDesign의 일부 프로젝트를 카테고리별로 탐색할 수 있습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em]">
            <button
              type="button"
              onClick={() => setActiveFilter(ALL)}
              className={`border px-3 py-1.5 transition-colors ${
                activeFilter === ALL ? "border-black bg-black text-white" : "border-black/10"
              }`}
            >
              All
            </button>
            {categories.map((cat: ProjectCategory) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`border px-3 py-1.5 transition-colors ${
                  activeFilter === cat ? "border-black bg-black text-white" : "border-black/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
        {typeof limit === "number" && (
          <div className="mt-8 flex justify-end">
            <Link
              href="/work"
              className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-black/70 hover:text-black"
            >
              <span>See All Projects</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}


