const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");
const dynamoose = require("dynamoose");

if (process.env.NODE_ENV === "LOCAL") {
  dynamoose.local("http://localhost:8000");
}
// Middleware
const errorLogger = require("./logging/error.logger");
const requestLogger = require("./logging/request.logger");
const authorizationMiddleware =require("./middleware/authorization.middleware");

// Routes
const fooRoutes = require("./foo/foo.routes");

const app = express();

// Body parsers
const jsonParser = bodyParser.json();

// This is a liberal use of cors, we may want to limit even further
app.use(cors());
// Log all requests before passing to route middleware
app.use(requestLogger);

// REST routes
app.use(
  "/v1/foo",
  /*
   Note that order is important here since we're using the json parser to translate application/json to be accessible
   off body in the authZ middleware
   */
  jsonParser,
  authorizationMiddleware,
  fooRoutes
);

// Finally log all errors
app.use(errorLogger);

/*
 Wrap the application in the serverless http translator. This makes it so that a lambda event is turned into an express
 request object for interfacing with express for routing.
 */
module.exports.handler = serverless(app);
