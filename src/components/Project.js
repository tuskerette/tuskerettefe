import React from 'react'

const Project = ({project}) =>
  <div className="project-panel" key={project.id}>
    <h4>{project.title}</h4>
    <p><a href="{project.app_link}" target="_blank">live demo</a></p>
    <p><a href="{project.github_link}" target="_blank">repo</a></p>
    <p>{project.description}</p>
    <p>{project.date_created}</p>
  </div>

export default Project
