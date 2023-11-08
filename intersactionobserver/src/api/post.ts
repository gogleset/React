interface idPostType extends Response {
  id: number;
  title: string;
  userId: number;
}

export async function getIdPosts(id: number): Promise<idPostType> {
  return (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
}
