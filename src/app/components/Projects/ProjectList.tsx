// components/ProjectList.tsx
import Link from "next/link";
import { projectsData } from "../../data/projects-data";

const ProjectList = () => {
  return (
    <div className="project-list">
      {projectsData.map((project) => (
        <div key={project.id} className="project-item">
          <h3>{project.title}</h3>
          <Link href={`/projects/${project.id}`}>
            View Project
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
