import React from 'react';
import './menu.scss';

const Header = () => {
  return (
    <div>
      <div className="menu">
        <ul className="menu-list"  id="stickymenu">
          <li><span>Yoga Classes</span></li>
          <li><span>Activities</span></li>
          <li><span>Learning</span></li>
          <li><img src={require('../../static/yoga-logo.png')} alt="logo"/></li>
          <li><span>Resources</span></li>
          <li><span>Chapters</span></li>
          <li><span>About</span></li>
          <li><span><i className="fa fa-search" aria-hidden="true"></i></span></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;