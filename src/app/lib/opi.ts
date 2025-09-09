import { GraphQLClient, gql } from 'graphql-request';
const API_URL = 'const API_URL = 'https://javiermix.ar/graphql';

// Función para obtener todos los posts
export async function getPosts() {
  const client = new GraphQLClient(API_URL);
  const query = gql`
    query AllPosts {
      posts {
        nodes {
          id
          title
          content
        }
      }
    }
  `;
  const data: any = await client.request(query);
  return data.posts.nodes;
}