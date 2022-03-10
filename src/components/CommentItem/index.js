import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentedItem = props => {
  const {eachComment, deleteItem, isLiked} = props
  const {id, name, comment, like, date, initialClassName} = eachComment
  const initial = name ? name[0].toUpperCase() : ''
  const postDate = formatDistanceToNow(date)

  const deleteComment = () => {
    deleteItem(id)
  }
  const onClickLiked = () => {
    isLiked(id)
  }

  const imageUrl = like
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeText = like ? 'blue-text' : null

  return (
    <li className="comment-container">
      <div className="comment-name-container">
        <p className={`initial ${initialClassName}`}>{initial}</p>
        <h1 className="commented-name">{name}</h1>
        <p className="date-time">{postDate} ago</p>
      </div>
      <p className="comment-text">{comment}</p>
      <div className="like-container">
        <div className="like-button-container">
          <button
            type="button"
            className="like-image-button"
            onClick={onClickLiked}
          >
            <img src={imageUrl} alt="like" className="like-image" />
          </button>

          <h1 className={`like ${likeText}`}>LIKE</h1>
        </div>
        <button
          testid="delete"
          className="delete-button"
          type="button"
          onClick={deleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="list-separator" />
    </li>
  )
}

export default CommentedItem
