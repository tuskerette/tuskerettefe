import React, { Component } from 'react'

class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3001/api/v1/projects.json')
    .then(response => response.json())
    .then(response => {
      this.setState({projects: response})
      console.log(response);
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div>
	    {this.state.projects && this.state.projects.map((project) => {
              return(
                <div className="project-panel" key={project.id} >
                  <h4>{project.title}</h4>
	          <p>{project.app_link}</p>	  
                  <p>{project.date_created}</p>
                  <p>{project.github_link}</p>
		  <p>{project.description}</p>
		</div>
              )       
            })}
      </div>
    );
  }
}
export default ProjectsContainer
