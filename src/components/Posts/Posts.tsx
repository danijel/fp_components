import React, { FC } from 'react'
import * as R from 'ramda'
import { Post, Comment } from './types'
import './styles.css'

interface Props {
  posts: Post[]
}

const isMissing = R.compose(R.isEmpty, R.defaultTo([]))
const Text = (text: string) => <p>{text}</p>
const Author = (author: string) => <h5>{author}</h5>

const commentHtml = R.compose<Comment, Comment, Comment>(
  R.over(R.lensProp('text'), Text),
  R.over(R.lensProp('author'), Author),
)

const Reply = ({ id, text, author }: Comment) => (
  <div className='reply-row' key={id}>
    {text}
    {author}
  </div>
)

const ReplyWrapper = R.compose<
  Comment[] | undefined,
  Comment[],
  Comment[],
  JSX.Element[]
>(R.map(Reply), R.map<Comment, Comment>(commentHtml), R.defaultTo([]))

const RepliesWrapper = (comment: Comment) => (
  <div key={comment.id}>
    <h4>Replies</h4>
    {ReplyWrapper(comment.replies)}
  </div>
)

const Replies = (comment: Comment) =>
  R.ifElse(
    () => isMissing(comment.replies),
    () => null,
    RepliesWrapper,
  )(comment)

const CommentRow = (comment: Comment) => {
  const { id, text, author } = comment
  return (
    <div className='comment-row' key={id}>
      {text}
      {author}
      {Replies(comment)}
    </div>
  )
}

const CommentWrapper = R.compose<
  Comment[] | undefined,
  Comment[],
  Comment[],
  JSX.Element[]
>(R.map(CommentRow), R.map<Comment, Comment>(commentHtml), R.defaultTo([]))

const CommentsWrapper = (post: Post) => (
  <div key={post.id}>
    <h3>Comments</h3>
    {CommentWrapper(post.comments)}
  </div>
)

const Comments = (post: Post) =>
  R.ifElse(
    () => isMissing(post.comments),
    () => null,
    CommentsWrapper,
  )(post)

const PostWrapper = ({ post }: { post: Post }) => {
  const { id, title, text } = post
  return (
    <div className='row' key={id}>
      <h2>{title}</h2>
      {Text(text)}
      {Comments(post)}
    </div>
  )
}

const Posts: FC<Props> = ({ posts }) => (
  <div>
    {posts.map(post => (
      <PostWrapper key={post.id} post={post} />
    ))}
  </div>
)

export { Posts }
