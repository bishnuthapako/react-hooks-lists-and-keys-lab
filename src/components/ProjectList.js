import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user";

function ProjectList({ projects }) {
  console.log(projects);
  return (  
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem name={projects[0].name}
        about = {projects[0].about}
        technologies = {projects[0].technologies}
        
        /> 
         <ProjectItem name={projects[1].name}
        about = {projects[1].about}
        technologies = {projects[1].technologies}
        /> 
         <ProjectItem name={projects[2].name}
        about = {projects[2].about}
        technologies = {projects[2].technologies}
        /> 
        
       
        {/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
