import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div>
      <ul>
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
