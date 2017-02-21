import React, { Component } from 'react';
import { Link } from 'react-router';
import './header-style';


export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='header'>

      <Link to='/'>
        <div className='headshot'></div>
      </Link>

      <div className='header-name-title'>
        <Link to='/'>
          <h1 className='header-name'>Mike Limberg</h1>
        </Link>
        <h3 className='header-title'>Front-End Developer</h3>
      </div>

      <ul className='top-nav-links'>
        <li>
          <Link to='/projects'>
            <h3 className='nav-link'>Projects</h3>
          </Link>
        </li>
        <li>
          <Link to='/resume'>
            <h3 className='nav-link'>Resume</h3>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <h3 className='contact-nav-link nav-link'>Contact Me</h3>
          </Link>
        </li>
      </ul>
    </div>
  )
  }
}
