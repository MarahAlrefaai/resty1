import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss'
function Header (props)  {
  return (
    <>
    <header>
      <h1>RESTy</h1>
    </header>

<nav>
<ul>
<li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/history">History</NavLink></li>
          <li><NavLink to="/help">Help</NavLink></li>
        </ul>
</nav>
</>
  );
};

export default Header;