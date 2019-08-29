const FooController = require("./foo.controller");
const { getFooRepository } = require("./foo.repository");

const fooController = new FooController({
  fooRepository: getFooRepository()
});

async function routes(fastify) {
  fastify.get("/:id", async ({ params: { version } }, options) => {
    return await fooController.getById(version);
  });

  fastify.get("/", async () => {
    return await fooController.getAll();
  });

  fastify.post("/", async ({ body: { foo } }, options) => {
    return await fooController.create(foo);
  });

  fastify.put("/:id", async ({ params: { id } }, options) => {
    return await fooController.update(id, foo);
  });
}

module.exports = routes;
