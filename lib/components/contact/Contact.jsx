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
      messages: [],
      error: false
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
    firebase.database().ref('messages').set({newMessage})
    const updatedMessages = [...this.state.messages, newMessage]
    this.setState({ messages: updatedMessages,
                    name: '',
                    email: '',
                    message: ''
                  })
  }

  invalidEmail() {
    if(this.state.error)
    return (
      <p className='invalid-email-error'>Please enter a valid email so I can respond</p>
    )
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        <form className='contact-form'
              // action='https://formspree.io/limbergmike@gmail.com'
              // method='POST'
              >

          <label>
            Name:
            <input className='contact-form-name'
                   ref='name'
                   placeholder='Your Name'
                   value={name}
                   onChange={(e) => this.setState({ name: e.target.value })}/>
          </label>

          <label>
            Email:
            <input className='contact-form-email'
                   name='_replyto'
                   placeholder='Your Email'
                   value={email}
                   onChange={(e) => this.setState({ email: e.target.value })}/>
          </label>

          {this.invalidEmail()}

          <label>
            Message:
            <textarea className='contact-form-message'
                      name='message'
                      placeholder='Your Message'
                      value={message}
                      onChange={(e) => this.setState({ message: e.target.value })} />
          </label>

          <button type='submit'
                  onClick={this.handleSubmit.bind(this)}>
            SEND
          </button>
        </form>
      </div>
    );
  }
}
