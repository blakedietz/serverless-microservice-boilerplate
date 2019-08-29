const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true
});
fastify.register(require("./foo/foo.routes"));
fastify.register(require("./graphql/server").createHandler());
module.exports = fastify;
