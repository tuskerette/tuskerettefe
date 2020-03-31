import React, { Component } from 'react'
import Project from './Project'
import axios from 'axios'
import update from 'immutability-helper'
import ProjectForm from './ProjectForm'

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
      // console.log(response);
    })
    .catch(error => console.log(error))
  }

    addNewProject = () => {
      axios.post(
        'http://localhost:3001/api/v1/projects',
        { project:
          {
            title: '',
            app_link: '',
	    github_link: '',
	    description: '',
	    date_created: ''
          }
        }
      )
      .then(response => {
        console.log(response)
        const projects = update(this.state.projects, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
	    projects: projects,
	    editingProjectId: response.data.id
	})
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
            if(this.state.editingProjectId === project.id) {
                return(<ProjectForm project={project} key={project.id} />)
            } else {
		return (<Project project={project} key={project.id} />)
	    }
	    })}
      </div>
    </div>
    );
  }
}
export default ProjectsContainer
