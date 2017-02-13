import React from 'react';
import './project-card-style';

const ProjectCard = (props) => {
  const { title, url, description } = props;

  return (
    <div className='project-card'>
      <h2>{title}</h2>
    </div>
  )
}

export default ProjectCard
