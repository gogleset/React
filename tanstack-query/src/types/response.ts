export type FetchGetAllPost = FetchGetPost[];

export type FetchGetPost = Post;

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
