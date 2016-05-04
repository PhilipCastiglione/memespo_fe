import React, { Component } from 'react';
import Votes from './votes';

export default class Meme extends Component {
  render() {
    return (
      <article>
        <img src='http://placecage.com/c/200/200' />
        <Votes />
      </article>
    );
  }
}
