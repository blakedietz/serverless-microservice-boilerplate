const { gql } = require("apollo-server-fastify");

module.exports.typeDefs = gql`
  extend type Query {
    hello: String
  }
`;

module.exports.resolvers = {
  Query: {
    hello: async () => {
      return "hello";
    }
  }
};
