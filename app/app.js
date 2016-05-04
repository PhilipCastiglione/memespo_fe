import React from 'react';
import Meme from './meme';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Memespo</h1>
        <Meme
          key={1}
          url='http://placehold.it/200/ff0000'
          upvotes={10}
          downvotes={5} />
        <Meme
          key={2}
          url='http://placehold.it/200/00ff00'
          upvotes={5}
          downvotes={9} />
        <Meme
          key={3}
          url='http://placehold.it/200/0000ff'
          upvotes={15}
          downvotes={2} />
        <Meme
          key={4}
          url='http://placehold.it/200/ff00ff'
          upvotes={11}
          downvotes={12} />
        <Meme
          key={5}
          url='http://placehold.it/200/00ffff'
          upvotes={8}
          downvotes={4} />
      </div>
    );
  }
}
