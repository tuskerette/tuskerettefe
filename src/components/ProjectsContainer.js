import React, { Component } from 'react'
import Project from './Project'

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

  addNewProject = (opts) => {
   // opts = { project:
     // { 
       // title: '',
       // github_link: '',
       // app_link: '',
       // description: '',
       // date_created: ''
      // }
   // }

    fetch('https://localhost:3001/api/v1/projects', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(function(response) {
      console.log(response); 
      return response.json();
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
    <div>
      <button className="newProjectButton" onClick={this.addNewProject} >
	Add a Project
      </button>   
      <div>
          {this.state.projects && this.state.projects.map((project) => {
            return (<Project project={project} key={project.id} />)
          })}
      </div>
    </div>
    );
  }
}
export default ProjectsContainer
