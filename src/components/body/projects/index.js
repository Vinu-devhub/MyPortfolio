import React from "react";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/project";
import ProjectCard from "./project-card";
import "./projects.css";
function Project() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Project</label>
      {data.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default Project;
