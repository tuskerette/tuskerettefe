import React, { Component } from 'react'
import axios from 'axios'

class ProjectForm extends Component {
   constructor(props) {
    super(props)
    this.state = {
      title: this.props.project.title,
      app_link: this.props.project.app_link,
      github_link: this.props.project.github_link,
      description: this.props.project.description,
      date_created: this.props.project.date_created
      }
    }

    handleInput = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleBlur = () => {
      const project = {
        title: this.state.title,
	app_link: this.state.app_link,
	github_link: this.state.github_link,      
        description: this.state.description,
	date_created: this.state.date_created      
  }

  axios.put(
    `http://localhost:3001/api/v1/projects/${this.props.project.id}`,
    {
	    project: project
    })
  .then(response => {
    console.log(response)
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div className='project-panel'>
        <form onBlur={this.handleBlur} >
          <input className='input' type='text'
            name='title' placeholder='Project title' 
	    value={this.state.title} onChange={this.handleInput} />
	  <input className='input' type='text'
            name='app_link' placeholder='App link' 
	    value={this.state.app_link} onChange={this.handleInput} />
	  <input className='input' type='text'
	    name='github_link' placeholder='GitHub link'
	    value={this.state.github_link} onChange={this.handleInput} />
          <textarea className='input' name='description'
            placeholder='Description' value={this.state.description} onChange={this.handleInput} >
	    </textarea>
	  <input className='input' type='text'
	    name='date_created' placeholder='Date Created'
	    value={this.state.date_created} onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default ProjectForm

