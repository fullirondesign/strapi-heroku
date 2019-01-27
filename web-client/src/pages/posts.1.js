import React from 'react';
import { graphql } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import Link from "gatsby"

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
      title
      createdAt

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
  <div style={{ textAlign: 'center' }}>
    <h1>{character.name} With His Pupper</h1>
    <p>
      Rick & Morty API data loads at build time. Dog API data loads at run time.
    </p>
    <div>
      <img src={character.image} alt={character.name} style={{ width: 300 }} />

      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading pupper...</p>;
          if (error) return console.log(error.message); // if: TODO: added so error on load would not show on the screen.

          // const { displayImage: src, breed } = data.dog;
          // return <img src={src} alt={breed} style={{ maxWidth: 300 }} />;
          console.log(data);
          return (
            <div>
              posts in console
              
               


              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                //   justifyContent: 'flex-center',
                alignContent:"center",
                justifyContent: "flex-start",
                  padding: '0',
                  margin: '0',
                  flexDirection: 'row',
                  background: 'grey',
                  width: '100%',
                  borderRadius: '42px',
                }}
              >
   



                {console.log(data.posts)}
                {data.posts.map(post => (
                  <div
                    key={post._id}
                    style={{
                      fontSize: '16px',
                      fontFamily: 'monospace',
                      margin: '1% 1% 1% 1%',
                      padding: '2% 1% 1% 1%',
                      borderRadius: '36px',     
                      width: '46%',
                      background: 'whitesmoke',
                      boxShadow: "0px 1px 1px 1px rgba(0,0,0,0.2)"
                    }}
                  >
                    <div>
                      <div>
                        <div className="post-inner">
                          {post._id}
                          <br />
                          {post.createdAt}
                          <br />
                          {post.title}
                          <br />
                          {post.content}
                        </div>
                        <div className="post-inner" />

                        {post.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  </div>
);
