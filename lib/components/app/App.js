import React, { Component } from 'react';
import Header from '../header/Header';

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
