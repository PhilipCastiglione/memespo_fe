import React, { Component } from 'react';

export default class Votes extends Component {
  render() {
    return (
      <ul>
        <li>It&apos;s good {this.props.upvotes}</li>
        <li>It&apos;s bad {this.props.downvotes}</li>
      </ul>
    );
  }
}
