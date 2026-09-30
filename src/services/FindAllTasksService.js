function FindAllTasksService(repository) {
  const _repository = repository;
  return {
    execute() {
      return Promise.resolve(_repository.findAll());
    },
  };
}

module.exports = FindAllTasksService;
