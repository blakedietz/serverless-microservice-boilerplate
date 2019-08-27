const dynamoose = require("dynamoose");

module.exports = ({ tableName }) => {
  dynamoose.AWS.config.update({
    region: "us-west-2"
  });

  const Foo = dynamoose.model(tableName, {
    createdAt: Number,
    updatedAt: Number,
    id: {
      type: String,
      hashKey: true
    },
    example: String
  });

  return Foo;
};
