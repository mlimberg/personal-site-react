import React, { Component } from 'react';
import ProjectCard from '../projectCard/ProjectCard';
import './projects-list-style';
// import rioImgPP from '../../images/rio-copy.jpg'

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
        {/* <img className='rio-img' src='./lib/components/projects/rio-copy.jpg' /> */}
        {/* <img src={rioImg}/> */}
        {projects}
      </div>
    );
  }
}
