import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveComment } from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      comment: '',
      id: 0
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveComment(this.state.id, this.state.comment);
    this.setState({comment: '', id: this.state.id + 1});
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <textarea value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})}></textarea>
        <button action="submit">Submit comment</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveComment
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentBox);
