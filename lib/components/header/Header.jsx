import React, { Component } from 'react';
import { Link } from 'react-router';
import './header-style';


export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
  }

  render() {
    return (
      <div className='header'>

        <Link to='/'>
        <img className='headshot'
             src={this.state.hover ? 'lib/images/personal_site_hat_headshot.png' : 'lib/images/personal_site_headshot.png' }   
             onMouseOver={() => this.setState({ hover: true })}
             onMouseLeave={() => this.setState({ hover: false })}/>
      </Link>

      <div className='header-name-title'>
        <h1 className='header-name'>Mike Limberg</h1>
        <h3 className='header-title'>-Front-End Developer-</h3>
      </div>

      <ul className='top-nav-links'>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
  }
}
