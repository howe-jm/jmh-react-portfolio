import React from 'react';
import ContactMe from './ContactMe/ContactMe';
import './Contact.css';
import githublogo from '../images/icons/github-logo.png';
import githubmark from '../images/icons/github-mark.png';
import linkedinbadge from '../images/icons/linkedin-badge.jpg';
import lilogo from '../images/icons/li-logo.png';

export default function Contact() {
  return (
    <div className='contact-container'>
      <h3>Want to get in touch?</h3>
      <h4>Email Me!</h4>
      <a href='mailto:j.howe@metonym.dev' class='email-add'>
        <p>j.howe@metonym.dev</p>
      </a>
      <div className='github-container'>
        <a href='https://github.com/howe-jm' target='_blank' rel='noreferrer'>
          <img className='github-logo' src={githublogo} alt='Github-logo' />
          <img className='github-mark' src={githubmark} alt='Github Mark' />
        </a>
      </div>
      <div className='linkedin-container'>
        <a href='https://www.linkedin.com/in/jm-howe/' target='_blank' rel='noreferrer'>
          <img className='linkedin-logo' src={linkedinbadge} alt='Linked-In Badge' />
          <img className='linkedin-mark' src={lilogo} alt='Linked-In Logo' />
        </a>
      </div>
      <div className='contact-form'>
        <ContactMe />
      </div>
    </div>
  );
}
