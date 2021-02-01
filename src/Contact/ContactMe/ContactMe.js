import React from 'react';
import './ContactMe.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className='email-form' onSubmit={this.submitForm} action='https://formspree.io/f/mqkyrynz' method='POST'>
        <h3 className='email-form-header'>Send me a message!</h3>
        <label htmlFor='email'>Email Address:</label>
        <input id='email' className='email-box' type='email' name='email' />
        <label htmlFor='message'>Message:</label>
        <textarea id='message' className='message-box' name='message' />
        {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
        {status === 'ERROR' && <p>Oops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
