import React, { FC } from 'react'
import { Post } from './types'
import './styles.css'

interface Props {
  posts: Post[]
}

const Posts: FC<Props> = ({ posts }) => (
  <div>
    {posts.map(({ id, title, text, comments }) => (
      <div key={id}>
        <div className='row'>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        {comments && <h3>Comments</h3>}
        {comments &&
          comments.map(
            ({ id: commentId, text: commentText, author, replies }) => (
              <div className='comment-row' key={commentId}>
                <p>{commentText}</p>
                <h5>{author}</h5>
                {replies && <h4>Replies</h4>}
                {replies &&
                  replies.map(
                    ({ id: replyId, text: replyText, author: replyAuthor }) => (
                      <div className='reply-row' key={replyId}>
                        <p>{replyText}</p>
                        <h5>{replyAuthor}</h5>
                      </div>
                    ),
                  )}
              </div>
            ),
          )}
      </div>
    ))}
  </div>
)

export { Posts }
