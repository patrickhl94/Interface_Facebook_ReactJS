import React, { Component } from 'react'

import '../style/comment.css'

class Comment extends Component {

  static defaultProps = {
    comments: {
      id: 0,
      author: {
        name: '',
        avatar: ''
      },
      content: ''
    }
  }

  render() {
    return (
      <div className="container-comment">
        <img src={this.props.comments.author.avatar} alt="" />
        <div className="area-text-comment">
          <p className="text-comment">
            <span className="name-comment" >  {this.props.comments.author.name} </span>
            {this.props.comments.content}
          </p>
        </div>
      </div>
    )
  }
}

export default Comment;