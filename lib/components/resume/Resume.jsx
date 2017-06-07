import React, { Component } from 'react';
import firebase, { storage, gsRef } from '../../firebase';
import './resume-style';

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      resumeURL: ''
    }
  }

  download() {
    const downloadURI = (uri, name) => {
      console.log('hit!');
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
    }

    gsRef.child('Limberg-Mike-Resume.pdf').getDownloadURL()
    .then(url => {
      let xhr = new XMLHttpRequest();

      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send()
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
          downloadURI(xhr.responseURL, 'Limberg-Mike-Resume')
        }
      }

    })
    .catch(err => console.error('err ', err))
  }


  handleClick() {
    window.open('https://resume.creddle.io/resume/7kk4iroeef0', '_blank')
  }

  render() {

    return (
      <div className='resume-container'>
        <button className='print-resume-btn btn' onClick={() => this.download()}>Download PDF</button>
        <img src='./lib/images/resume.jpg'
        className='resume-img'
        onClick={() => this.handleClick()}/>
      </div>
    );
  }
}
