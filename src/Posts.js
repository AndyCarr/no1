import React from 'react';

class Posts extends React.Component {
  render() {
    return <li>
            <h3>{this.props.item.name}</h3>
            <p>{this.props.item.description}</p>
          </li>;
  }
}

export default Posts;
