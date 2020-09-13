import { random, name, lorem } from 'faker'
import { Post } from '../components/Posts/types'

export const DEMO_POSTS: Post[] = [
  {
    id: random.uuid(),
    title: lorem.words(),
    text: lorem.paragraph(3),
    comments: [
      {
        id: random.uuid(),
        text: lorem.sentence(),
        author: name.firstName(),
        replies: [
          {
            id: random.uuid(),
            text: lorem.sentence(),
            author: name.firstName(),
          },
          {
            id: random.uuid(),
            text: lorem.sentence(),
            author: name.firstName(),
          },
        ],
      },
      {
        id: random.uuid(),
        text: lorem.sentence(),
        author: name.firstName(),
        replies: [
          {
            id: random.uuid(),
            text: lorem.sentence(),
            author: name.firstName(),
          },
        ],
      },
    ],
  },
  {
    id: random.uuid(),
    title: lorem.words(),
    text: lorem.paragraph(3),
    comments: [
      {
        id: random.uuid(),
        text: lorem.sentence(),
        author: name.firstName(),
        replies: [
          {
            id: random.uuid(),
            text: lorem.sentence(),
            author: name.firstName(),
          },
        ],
      },
    ],
  },
]
