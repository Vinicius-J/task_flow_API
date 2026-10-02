function CreateTaskService(repository) {
  const _repository = repository;
  return {
    execute(task) {
      const newTask = { completed: false, task };
      return _repository.create(newTask).then(function (task) {
        return task;
      });
    },
  };
}

module.exports = CreateTaskService;
