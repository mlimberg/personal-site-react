import React, { Component } from 'react';
import './resume-style';


const Resume = () => {

  const handleClick = () => {
    window.open('https://resume.creddle.io/resume/7kk4iroeef0', '_blank')
  }

  return (
    <div className='resume-container'>
        <img src='./lib/images/resume.jpg'
             className='resume-img'
             onClick={() => handleClick()}/>
    </div>
  );
}

export default Resume
