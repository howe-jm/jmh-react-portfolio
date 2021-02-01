import React from 'react';
import Nav from './Nav/Nav';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <h1>Jason Howe</h1>
      <h2>Full Stack Developer</h2>
      <Nav />
    </div>
  );
}
