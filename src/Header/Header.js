import React from 'react';
import Nav from './Nav/Nav';
import './Header.css';

export default function Header() {
  return (
    <div className='Header'>
      <h1>This is the header</h1>
      <Nav />
    </div>
  );
}
