// src/app/projects/[id]/generateMetadata.ts
import { Metadata } from "next";
import { projectsData } from "../../data/projects-data";

// Function to generate metadata for the project page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const projectId = parseInt(params.id);
  const project = projectsData.find((project) => project.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "No project found with the given ID.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.platformImage],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.platformImage],
    },
  };
}
