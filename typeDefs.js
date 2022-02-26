const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
type User {
    id: ID!
    username: String!
    firstname: String!
    lastname: String!
    password: String!
    email: String!
    type: String!
}
type Query {
    getUser: [User]
  }
type Mutation {
     addUser(
        username: String!
        firstname: String!
        lastname: String!
        password: String!
        email: String!
        type: String!): User
}`