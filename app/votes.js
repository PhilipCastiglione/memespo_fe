import React from 'react';

export default class Votes extends React.Component {
  render() {
    return (
      <ul>
        <li onClick={this.props.incrementUpvotes}>It&apos;s good {this.props.upvotes}</li>
        <li onClick={this.props.incrementDownvotes}>It&apos;s bad {this.props.downvotes}</li>
      </ul>
    );
  }
}
