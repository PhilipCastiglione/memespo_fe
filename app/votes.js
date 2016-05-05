import React from 'react';

const Votes = (props) => {
    return (
      <ul>
        <li onClick={props.incrementUpvotes}>It&apos;s good {props.upvotes}</li>
        <li onClick={props.incrementDownvotes}>It&apos;s bad {props.downvotes}</li>
      </ul>
    );
}

export default Votes;
