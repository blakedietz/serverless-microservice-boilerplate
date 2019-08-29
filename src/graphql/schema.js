const { gql, makeExecutableSchema } = require("apollo-server-fastify");
const { merge } = require("lodash");
const {
  resolvers: helloResolvers,
  typeDefs: helloTypeDefs
} = require("./resolvers/hello");

const resolvers = merge(helloResolvers);

const queryTypeDef = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const typeDefs = [queryTypeDef, helloTypeDefs];

module.exports = makeExecutableSchema({ typeDefs, resolvers });
