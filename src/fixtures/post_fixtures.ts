import { random, name, lorem } from 'faker'
import { Post } from '../components/Posts/types'

export const DEMO_POSTS: Post[] = [
  {
    id: random.uuid(),
    title: lorem.words(),
    comments: [
      { id: random.uuid(), text: lorem.sentence(), author: name.firstName() },
      { id: random.uuid(), text: lorem.sentence(), author: name.firstName() },
    ],
  },
  {
    id: random.uuid(),
    title: lorem.words(),
    comments: [
      { id: random.uuid(), text: lorem.sentence(), author: name.firstName() },
    ],
  },
]
