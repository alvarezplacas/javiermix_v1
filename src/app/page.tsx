import { getPosts } from '../lib/api';

export default async function Home() {
  const posts = await getPosts();

  console.log("Datos de WordPress:", posts);

  return (
    <main>
      <h1>Probando la conexión</h1>
    </main>
  );
}