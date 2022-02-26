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
}

      addListing(listing_id: String!
        listing_title: String!
        description: String!
        street: String!
        city: String!
        postal_code: String!
        email: String!
        username: String!): Listing
      addBooking(listing_id: String!
        booking_id: String!
        username: String!): Booking

      }
`