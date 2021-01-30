import React from 'react';
import './PageNotFound.css';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div className='not-found'>
        <h2>You won't find what you're looking for here...</h2>
        <p>Get outta here, stalker.</p>
      </div>
    );
  }
}
