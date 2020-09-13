export interface Comment {
  id: string
  text: string
  author: string
  replies?: Comment[]
}

export interface Post {
  id: string
  title: string
  text: string
  comments?: Comment[]
}
