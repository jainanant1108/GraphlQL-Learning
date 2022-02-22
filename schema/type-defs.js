const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    country: Country!
    friends: [User]
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
  }

  enum Country {
    INDIA
    CANADA
    CHILE
  }
`;

module.exports = { typeDefs };
