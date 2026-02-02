import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectView from "@/components/work/ProjectView";

// Correctly type the params as a Promise
interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: PageProps) {
    // Await the params to extract the slug
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectView project={project} />;
}
