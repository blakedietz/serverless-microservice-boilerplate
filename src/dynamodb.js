const dynamoose = require("dynamoose");
const setup = () => {
  if (process.env.NODE_ENV === "LOCAL") {
    dynamoose.local("http://localhost:8000");
  }
};

module.exports = { setup };
