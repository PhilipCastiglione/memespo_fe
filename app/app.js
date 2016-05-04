import React, { Component } from 'react';
import Meme from './meme';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Memespo</h1>
        <Meme />
        <Meme />
        <Meme />
      </div>
    );
  }
}
