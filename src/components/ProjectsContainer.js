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
    const env_url = ((process.env.NODE_ENV === 'production') ? 'https://tuskerette.herokuapp.com' : 'http://localhost:3001');
    return fetch(env_url + '/api/v1/projects.json')
    .then(response => response.json())
    .then(response => {
      this.setState({projects: response})
    })
    .catch(error => console.log(error))
  }

    render() {
      return (
        <div>
          {this.state.projects && this.state.projects.map((project) => {
              return (<Project project={project} key={project.id} />)
        })}
	</div>
    );
  }
}

export default ProjectsContainer
