import React from 'react';
import './project-card-style';

const ProjectCard = (props) => {
  const { title, url, description, img } = props;

  return (
    <div className='project-card'>
      <h2>{title}</h2>
      <img src={img} className='project-card-img'/>
    </div>
  )
}

export default ProjectCard
