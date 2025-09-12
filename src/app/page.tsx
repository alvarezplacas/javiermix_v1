import { getPosts } from '../lib/api';

export default async function Home() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Mi Portafolio y Blog</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </main>
  );
}