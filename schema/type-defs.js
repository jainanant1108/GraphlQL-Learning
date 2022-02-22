const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    country: Country!
    friends: [User]
    favmovie: [Movie!]
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
    movies: [Movie]!
    movie(name: String!): Movie!
  }

  type Movie {
    id: ID!
    name: String!
    released: Boolean!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    country: Country = INDIA
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  enum Country {
    INDIA
    CANADA
    CHILE
  }
`;

module.exports = { typeDefs };
