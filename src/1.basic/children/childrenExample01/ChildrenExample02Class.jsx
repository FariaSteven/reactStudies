import React, { Component } from 'react';

export default class ChildrenExample02Class extends Component {
    render() {
      return <p>{this.props.children}</p>;
  };
};
