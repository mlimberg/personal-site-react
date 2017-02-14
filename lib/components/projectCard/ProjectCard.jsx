import React from 'react';
import './project-card-style';

const ProjectCard = (props) => {
  const { title, url, summary, img } = props;

  const redirect = () => {
    window.open(url, '_blank')
  }

  return (
    // <div className='tool'
    <div className='project-card' onClick={() => redirect()}>
      <p className='tooltip'>Click to see the project on GitHub!</p>
      {/* <a href={url} target='_blank'> */}
        <h2 className='project-card-title'>{title}</h2>
        <img src={img} className='project-card-img'/>
        <p className='project-card-summary'>{summary}</p>
      {/* </a> */}
    </div>
  )
}

export default ProjectCard
