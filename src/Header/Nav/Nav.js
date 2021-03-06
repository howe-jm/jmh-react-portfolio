import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/projects'>Projects</Link>
        <a href='https://blog.metonym.dev/' target='_blank' rel='noreferrer'>
          Blog
        </a>
      </nav>
    );
  }
}
