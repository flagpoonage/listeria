require('./style/nav_main.pcss');

import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router';

const NavMain = () => (
  <nav className="nav_main">
    <Link className="main_link" to="/dashboard">
      <i className="fa fa-user"></i>
      <span>{'Dashboard'}</span>
    </Link>
    <Link className="main_link" to="/projects/all">
      <i className="fa fa-cube"></i>
      <span>{'Projects'}</span>
    </Link>
    <Link className="main_link" to="/brands/all">
      <i className="fa fa-paypal"></i>
      <span>{'Brands'}</span>
    </Link>
    <Link className="main_link" to="/humans/all">
      <i className="fa fa-users"></i>
      <span>{'Humans'}</span>
    </Link>
    <Link className="main_link" to="/settings">
      <i className="fa fa-cog"></i>
      <span>{'Settings'}</span>
    </Link>
  </nav>
);

export { NavMain };
