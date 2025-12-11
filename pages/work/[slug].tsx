import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function getProjectBySlug(slug: string | string[] | undefined): {
  project: Project | undefined;
  index: number;
} {
  if (!slug || typeof slug !== "string") return { project: undefined, index: -1 };
  const index = projects.findIndex((p) => p.slug === slug);
  return { project: projects[index], index };
}

export default function ProjectDetailPage() {
  const router = useRouter();
  const { project, index } = getProjectBySlug(router.query.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-primary">
        <Header />
        <main className="section-padding">
          <div className="container">
            <p className="text-sm text-black/60">Project not found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <div className="min-h-screen bg-background text-primary">
      <Header />
      <main>
        <section className="border-b border-black/5 bg-[#f9f9f9] pb-10 pt-16">
          <div className="container grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-accent-light">
                <Image
                  src={project.images[0]?.src ?? "/placeholder.svg"}
                  alt={project.images[0]?.alt ?? project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 text-sm">
              <p className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                {project.category}
              </p>
              <h1 className="text-2xl font-semibold tracking-tightMinus">{project.title}</h1>
              <div className="grid grid-cols-2 gap-3 text-xs text-black/75">
                {project.client && (
                  <div>
                    <div className="uppercase tracking-[0.14em] text-black/50">Client</div>
                    <div>{project.client}</div>
                  </div>
                )}
                <div>
                  <div className="uppercase tracking-[0.14em] text-black/50">Year</div>
                  <div>{project.year}</div>
                </div>
                <div className="col-span-2">
                  <div className="uppercase tracking-[0.14em] text-black/50">Role</div>
                  <div>{project.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-black/80">{project.description}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container space-y-8">
            {project.images.slice(1).map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden bg-accent-light">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-black/5 bg-[#f7f7f7] py-6">
          <div className="container flex items-center justify-between text-xs uppercase tracking-[0.16em]">
            {prev ? (
              <Link href={`/work/${prev.slug}`} className="text-black/70 hover:text-black">
                ← Previous: {prev.title}
              </Link>
            ) : (
              <span />
            )}
            <Link href="/#work" className="text-black/70 hover:text-black">
              Back to Work
            </Link>
            {next ? (
              <Link href={`/work/${next.slug}`} className="text-black/70 hover:text-black">
                Next: {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}




