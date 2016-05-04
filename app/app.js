import React, { Component } from 'react';
import Meme from './meme';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Memespo</h1>
        <Meme
          url='http://placehold.it/200/ff0000'
          upvotes={10}
          downvotes={5} />
        <Meme
          url='http://placehold.it/200/00ff00'
          upvotes={5}
          downvotes={9} />
        <Meme
          url='http://placehold.it/200/0000ff'
          upvotes={15}
          downvotes={2} />
      </div>
    );
  }
}
