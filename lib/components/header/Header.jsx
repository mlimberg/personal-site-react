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
          <Link className='nav-link' to='/projects'>Projects</Link>
        </li>
        <li>
          <Link className='nav-link' to='/resume'>Resume</Link>
        </li>
        <li>
          <Link className='nav-link' to='/contact'>
            <span className='contact-nav-link'>Contact Me!</span>
          </Link>
        </li>
      </ul>
    </div>
  )
  }
}
