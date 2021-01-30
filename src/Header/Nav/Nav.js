import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/projects'>Projects</Link>
      </nav>
    );
  }
}