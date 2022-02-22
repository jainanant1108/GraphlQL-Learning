const { ApolloServer } = require("apollo-server-express");

const server = new ApolloServer({ typeDefs, resolvers });
