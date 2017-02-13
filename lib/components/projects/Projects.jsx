import React, { Component } from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import './projects-list-style';

export default class Projects extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const projects = this.props.projects.map((p, i) => {
      return(
        <ProjectCard key={i} {...p}/>
      )
    })

    return (
      <div className='project-list-container'>
        {/* <img src={require('../../images/rio-campsite.jpg')} /> */}
        {projects}
      </div>
    );
  }
}
