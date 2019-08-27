const express = require("express");
const router = express.Router();

const FooController = require("./foo.controller");
const asyncMiddleWare = require("../middleware/async.middleware");
const logger = require("../logging/application.logger");
const { getFooRepository } = require("./foo.repository");

const fooController = new FooController({
  fooRepository: getFooRepository(),
  logger
});

router.get("/", async (req, res, next) => {
  return res.json(await fooController.getAll());
});

router.get(
  "/:id",
  asyncMiddleWare(async ({ params: { version } }, res, next) => {
    return res.json(await fooController.getById(version));
  })
);

router.post("/", async ({ body: {  foo } }, res, next) => {
  return res.json(await fooController.create(foo));
});

router.put(
  "/:id",
  async ({ params: { id }, body: { foo } }, res, next) => {
    return res.json(await fooController.update(id, foo));
  }
);

module.exports = router;
