import React, { Component } from 'react'

class ProjectsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/projects.json')
     .then(response => {
      this.setState({projects: response.data})
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div>
        Projects
      </div>
    )
  }
}

export default ProjectsContainer
