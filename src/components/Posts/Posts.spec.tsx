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
      expect(getByText(post.title)).toBeInTheDocument()
    })
  })
})
