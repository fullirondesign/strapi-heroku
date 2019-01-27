import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from "gatsby"


// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    rickAndMorty {
      character(id: 1) {
        name
        image
      }
    }
  }
`;

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
query POSTS {
  posts {
    _id
    content
    cover {
      public_id
    }
  }
}
`;

export default ({
  data: {
    rickAndMorty: { character },
  },
}) => (
  <div style={{ textAlign: 'center', width: '600px', margin: '50px auto' }}>
    <h1>{character.name} With His Pupper</h1>
    <p>
      Rick & Morty API data loads at build time. Dog API data loads at run time.
    </p>
    <div>
      <img src={character.image} alt={character.name} style={{ width: 300 }} />
      <Link to="/posts">posts</Link>

      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading pupper...</p>;
          if (error) return <p>Error: ${error.message}</p>;

          // const { displayImage: src, breed } = data.dog;
          // return <img src={src} alt={breed} style={{ maxWidth: 300 }} />;
          console.log(data);
          return (
            <div>
              posts in console 
              {console.log(data.posts)}
              {data.posts.map((post) => (
              <div key={post._id}>
                <div style={{ background: 'darksalmon', borderRadius: '3px' }}>
                 
                  <ul
                    style={{
                      fontSize: '16px',
                      fontFamily: 'monospace',
                      padding: '6px 0 6px 0',
                    }}
                  >
                    {post._id}<br/>
                    {post.content}
                  </ul>
                </div>
              </div>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  </div>
);
