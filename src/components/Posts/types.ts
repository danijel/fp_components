export interface Comment {
  id: string
  text: string
  author: string
}

export interface Post {
  id: string
  title: string
  comments: Comment[]
}
