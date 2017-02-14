import React, { Component } from 'react';
import Header from '../header/Header';
import ProjectList from '../../projectList/ProjectList';
import './app-style.scss'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {

    const Children = React.cloneElement(this.props.children, {
      projects: ProjectList,
    })

    return (
      <div>
          <Header />
          <div className="other">
            {Children}
          </div>
      </div>
    );
  }
}
