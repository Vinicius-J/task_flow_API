function FindAllTasksService(repository) {
  const _repository = repository;
  return {
    execute() {
      return _repository.findAll();
    },
  };
}

module.exports = FindAllTasksService;
