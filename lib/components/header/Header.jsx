import React from 'react';
import { Link } from 'react-router';
import './header-style';

const Header = () => {
  return (
    <div className='header'>

      <Link to='/'>
        <img src='https://cdn.okccdn.com/php/load_okc_image.php/images/1x1/425x1000/0x0/0x0/0/17045396890459222340.jpeg'/>
        {/* <img src='../../images/rio-campsite.jpg'/> */}
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

export default Header;
