import React from 'react';
import Votes from './votes';

export default class Meme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: props.upvotes,
      downvotes: props.downvotes
    }
    this.incrementUpvotes = this.incrementUpvotes.bind(this);
    this.incrementDownvotes = this.incrementDownvotes.bind(this);
  }
  incrementUpvotes() {
    this.setState({upvotes: this.state.upvotes + 1});
  }
  incrementDownvotes() {
    this.setState({downvotes: this.state.downvotes + 1});
  }
  render() {
    return (
      <article>
        <img src={this.props.url} />
        <Votes 
          incrementUpvotes={this.incrementUpvotes}
          incrementDownvotes={this.incrementDownvotes}
          upvotes={this.state.upvotes}
          downvotes={this.state.downvotes} />
      </article>
    );
  }
}

Meme.propTypes = {
  url: React.PropTypes.string,
  upvotes: React.PropTypes.number,
  downvotes: React.PropTypes.number
}
