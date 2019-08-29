const { setup } = require("./dynamodb");
setup();

const awsLambdaFastify = require("aws-lambda-fastify");

const app = require("./server");
const proxy = awsLambdaFastify(app);

exports.handler = proxy;
