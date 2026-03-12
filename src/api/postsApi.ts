export type Post = {
  id: number;
  title: string;
};

export async function fetchPostsApi(): Promise<Post[]> {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
  );

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return (await response.json()) as Post[];
}

