import React, { FC } from 'react'
import { Post } from './types'
import './styles.css'

interface Props {
  posts: Post[]
}


const Posts: FC<Props> = ({ posts }) => (
  <div>
    <div className='row'>
      {posts.map(({ id, title }) => (
        <h2 key={id}>{title}</h2>
      ))}
    </div>
    <div className='row'>
      {posts.map(({ id, comments }) => (
        <div key={id}>
          <h2>Comments</h2>
          {comments.map(comment => (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <h5>{comment.author}</h5>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export { Posts }
