import React from 'react';
import './UserPosts.css'
import Posts from './Posts'

class UserPosts extends React.Component {
  render() {
    let postsdatas = [
      {code: "P01", name: "Traditional Merlot", description: "A bottle of middle weight wine, lower in tannins (smoother), with a more red-fruited flavor profile."},
      {code: "P02", name: "Classic Chianti", description: "A medium-bodied wine characterized by a marvelous freshness with a lingering, fruity finish"},
      {code: "P03", name: "Chardonnay", description: "A dry full-bodied white wine with spicy, bourbon-y notes in an elegant bottle"},
      {code: "P04", name: "Brunello di Montalcino", description: "A bottle of red wine with exceptionally bold fruit flavors, high tannin, and high acidity"}
    ];

    let PostsList = [];

    for (let postsdata of postsdatas) {
      PostsList.push(<Posts item={postsdata}/>);
    }
    return <ul>{PostsList}</ul>;
  }
}

export default UserPosts;
