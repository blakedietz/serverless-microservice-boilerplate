const express = require("express");
const router = express.Router();

const FooController = require("./foo.controller");
const { wrapAsync } = require("../lib/wrap-async");
const logger = require("../middleware/logging/application.logger");
const { getFooRepository } = require("./foo.repository");

const fooController = new FooController({
  fooRepository: getFooRepository(),
  logger
});

router.get("/",
  wrapAsync(
    async (req, res, next) => {
      return res.json(await fooController.getAll());
    }
  )
);

router.get(
  "/:id",
  wrapAsync(
    async ({ params: { version } }, res, next) => {
      return res.json(await fooController.getById(version));
    }
  )
);

router.post("/",
  wrapAsync(
    async ({ body: {  foo } }, res, next) => {
      return res.json(await fooController.create(foo));
    }
  )
);

router.put(
  "/:id",
  wrapAsync(
    async ({ params: { id }, body: { foo } }, res, next) => {
      return res.json(await fooController.update(id, foo));
    }
  )
);

module.exports = router;
