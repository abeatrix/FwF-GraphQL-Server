const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
type Post {
    id: ID!
    text: String!
    likes: [String]!
    comments: [String]!
    movieid: String!
    photoURL: String!
    poster: String!
    rating: String!
    release: String!
    synopsis: String!
    title: String!
    uid: String!
    username: String!
}
type Query {
    posts: [Post]
}
`
