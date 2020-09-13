export interface Comment {
  id: string
  text: string
  author: string
  replies?: Comment[]
}

export interface Post {
  id: string
  title: string
  comments?: Comment[]
}
