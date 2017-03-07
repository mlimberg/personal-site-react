import React, { Component } from 'react';
import './home-style';
import Fade from 'react-fade';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      fadeOut: false,
      visible: 'visible'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ fadeOut: true, visible: 'hidden' })
    }, 5000)
  }

  render() {
    const { fadeOut, visible } = this.state;

    return (
      <div className='main-app'>
        <Fade out={fadeOut}
              duration={2}
              style={{ visibility: visible, transitionDuration: '2s' }}>
          <h1 className='home-h1'>Welcome!</h1>
        </Fade>
      </div>
    )
  }
}
