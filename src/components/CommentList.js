import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let comments = this.props.comments, list;

    comments ? list = comments.map((comment) => <li key={comment.id}>{comment.comment}</li>) : '';

    return (
      <ul className="comment-list">
        {list}
      </ul>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    comments: reduxState.comments
  };
}

export default connect(mapStateToProps)(CommentList);
