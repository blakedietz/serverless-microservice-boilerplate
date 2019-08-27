class FooController {
  constructor({ fooRepository, logger }) {
    this.fooRepository = fooRepository;
    this.logger = logger;
  }

  async create(foo) {
    return this.fooRepository.createFoo(foo);
  }

  async getAll() {
    return this.fooRepository.getAllFoos();
  }

  async getById(id) {
    return this.fooRepository.getFooById(id);
  }

  async update(id, changes) {
    return this.fooRepository.updateFoo(
      id,
     changes
    );
  }
}

module.exports = FooController;
