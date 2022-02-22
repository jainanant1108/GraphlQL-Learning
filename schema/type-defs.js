const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    country: String!
  }

  type Query {
    users: [User]!
  }
`;

module.exports = { typeDefs };
