import React, { Component } from 'react';
import firebase, { reference } from '../../firebase';
import './contact-style';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      error: false,
      sent: false
    }
  }

  validateEmail() {
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(this.state.email)) {
      return true;
    } else { return false }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.validateEmail() ? this.storeMessage() : this.setState({ error: true })
  }

  storeMessage() {
    const { name, email, message } = this.state;
    const newMessage = { name, email, message };
    firebase.database().ref(this.state.name).push(Object.assign(newMessage, { date: Date() }))
      .then(() => {this.setState({ name: '', email: '', message: '', sent: true, error: false })})
  }

  invalidEmail() {
    if(this.state.error)
    return (
      <p className='invalid-email-error'>Please ensure that you enter a valid email</p>
    )
  }

  thankYouMessage() {
    return(
      <div className='contact-container'>
        <h3 className='contact-h1'>Thank you for your message!</h3>
        <button className='btn new-message-btn'
                onClick={() => this.setState({ sent: false, error: false })}>
          New Message
        </button>
      </div>
    )
  }

  contactForm() {
    const { name, email, message } = this.state;
    return (
      <div className='contact-container'>


        <form className='contact-form'>
          <h1 className='contact-h1'>Send me a note!</h1>

          {/* <label>
            Name: */}
            <input className='contact-form-name'
              ref='name'
               placeholder='Name'
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}/>
          {/* </label> */}

          {/* <label>
            Email: */}
            <input className='contact-form-email'
              name='_replyto'
               placeholder='Email'
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}/>
          {/* </label> */}

          {this.invalidEmail()}

          {/* <label>
            Message: */}
            <textarea className='contact-form-message'
              name='message'
              placeholder='Message'
              value={message}
              onChange={(e) => this.setState({ message: e.target.value })} />
          {/* </label> */}

          <button type='submit'
            disabled={!this.state.email || !this.state.name || !this.state.message}
            className='btn send-btn'
            onClick={this.handleSubmit.bind(this)}>
            SEND
          </button>
        </form>
      </div>
    )
  }

  render() {
    { return !this.state.sent ? this.contactForm() : this.thankYouMessage() }
  }
}
