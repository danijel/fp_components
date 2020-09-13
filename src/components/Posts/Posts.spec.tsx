import React from 'react'
import { render } from '@testing-library/react'
import { Posts } from './Posts'
import { DEMO_POSTS } from '../../fixtures/post_fixtures'

const subject = () => {
  return render(<Posts posts={DEMO_POSTS} />)
}

describe('Posts', () => {
  it('renders all posts and comments', () => {
    const { getByText } = subject()
    DEMO_POSTS.forEach(post => {
      const { title, text, comments } = post
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(text)).toBeInTheDocument()
      if (comments) {
        comments.forEach(({ text: commentText, author, replies }) => {
          expect(getByText(commentText)).toBeInTheDocument()
          expect(getByText(author)).toBeInTheDocument()
          if (replies) {
            replies.forEach(({ text: replyText, author: replyAuthor }) => {
              expect(getByText(replyText)).toBeInTheDocument()
              expect(getByText(replyAuthor)).toBeInTheDocument()
            })
          }
        })
      }
    })
  })
})
