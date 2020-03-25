import React, { Component } from 'react';

import Post from './Post';
import '../style/postList.css'

class PostList extends Component {

  render() {

    return (
      <div class="container-list">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }

}

export default PostList;