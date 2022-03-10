import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import CommentedItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentList: [], name: '', comment: ''}

  onAddComment = event => {
    const {name, comment} = this.state
    event.preventDefault()

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuid4(),
      name,
      comment,
      date: new Date(),
      isLike: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      like: false,
    }))
  }

  isLiked = id => {
    const {like} = this.state
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachLike => {
        if (eachLike.id === id) {
          return {...eachLike, like: !eachLike.like}
        }
        return eachLike
      }),
    }))
  }

  onChangeName = event => {
    if (event.target.value === '') {
      alert('plese Enter you name')
    }
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    if (event.target.value === '') {
      alert('plese Enter you Comment')
    }
    this.setState({comment: event.target.value})
  }

  deleteItem = id => {
    const {commentList} = this.state
    const deleteCommentedItem = commentList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentList: deleteCommentedItem})
  }

  render() {
    const {name, comment, commentList} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Comments</h1>
        <div className="inputs-image-container">
          <div className="input-container">
            <p className="para">Say Something about 4.0 Technologies</p>
            <form className="form" onSubmit={this.onAddComment}>
              <input
                type="text"
                value={name}
                onChange={this.onChangeName}
                className="name"
                placeholder="Your Name"
              />
              <textarea
                type="text"
                value={comment}
                onChange={this.onChangeComment}
                className="comment"
                placeholder="Your Comment"
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="image-image"
            />
          </div>
        </div>
        <hr className="separator" />
        <div className="comment-section">
          <p className="count">{commentList.length}</p>
          <p className="para-count">Comments</p>
        </div>
        <ul className="unordered-list">
          {commentList.map(eachComment => (
            <CommentedItem
              key={eachComment.id}
              eachComment={eachComment}
              deleteItem={this.deleteItem}
              isLiked={this.isLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
