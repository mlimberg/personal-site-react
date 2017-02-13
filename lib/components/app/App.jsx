import React, { Component } from 'react';
import Header from '../header/Header';
import ProjectList from '../../projectList/ProjectList';

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
        {Children}
      </div>
    );
  }
}
