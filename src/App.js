import React, { Component } from 'react'
import './App.css'
import ProjectsContainer from './components/ProjectsContainer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='static-text'>
	  <h1>Tuskerette</h1>
	  <p>Hi, I am Valeria Graffeo and this is my personal website/portfolio.</p>
	  <p>I am a full-stack developer currently based in the Boston area, and working primarily on Ruby on Rails,
	  but I like to call myself a programmer, well and Valeria, too. Except I tend not call myself, usually others call me.</p>
	  <p>I work every day towards my goal of becoming a developer who crafts real good code, effective but also with creative solutions, across the stack and across the US or Europe, learning every day.</p>
        </div>
	<ProjectsContainer />
      </div>
    );
  }
}

export default App
