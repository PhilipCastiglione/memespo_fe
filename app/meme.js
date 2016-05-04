import React, { Component } from 'react';
import Votes from './votes';

export default class Meme extends Component {
  render() {
    return (
      <article>
        <img src={this.props.url} />
        <Votes 
          upvotes={this.props.upvotes}
          downvotes={this.props.downvotes} />
      </article>
    );
  }
}
