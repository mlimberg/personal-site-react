import React, { Component } from 'react';
import './resume-style';
// import spdf from 'simple-react-pdf'
// import PDF from 'react-pdf-js';

const Resume = () => {
  return (
    <div className='resume-container'>
      {/* <a href='https://resume.creddle.io/resume/7kk4iroeef0' target='_blank'> */}
        <img src='./lib/images/resume.jpg'
             className='resume-img' />
      {/* </a> */}
    </div>
  );
}

export default Resume
