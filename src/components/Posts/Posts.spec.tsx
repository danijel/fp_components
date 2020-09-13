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
      const { title, comments } = post
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(title)).toBeInTheDocument()
      if (comments) {
        comments.forEach(({ text, author, replies }) => {
          expect(getByText(text)).toBeInTheDocument()
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
