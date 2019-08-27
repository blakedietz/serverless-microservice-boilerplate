const uuid = require("uuid/v1");

class FooRepository {
  constructor({ dbConnection }) {
    this.dbConnection = dbConnection;
  }

  async createFoo({
    example = ""
  }) {
    return this.dbConnection.create({
      id: uuid(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      example
    });
  }

  async getAllFoos() {
    return this.dbConnection.scan().exec();
  }

  async getFooById(id) {
    return this.dbConnection.get(id);
  }

  async updateFoo(id, fooChanges) {
    return this.dbConnection.update(id, fooChanges);
  }
}

let fooRepository;

const getFooRepository = () => {
  if (!fooRepository) {
    const fooTable = require("./foo.entity")({
      tableName: process.env.FOO_TABLE
    });

    fooRepository = new FooRepository({
      dbConnection: fooTable
    });
  }

  return fooRepository;
};

module.exports = {
  getFooRepository: getFooRepository
};
