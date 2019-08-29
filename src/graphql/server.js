const { ApolloServer } = require("apollo-server-fastify");
const schema = require("./schema");

const server = new ApolloServer({ schema });

module.exports = server;
