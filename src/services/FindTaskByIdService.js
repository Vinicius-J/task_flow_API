function FindTaskByIdService(repository) {
  const _repository = repository;
  return {
    execute(id) {
      return _repository.findById(id).then(function (task) {
        if (!task) throw new Error("Task not found");
        return task;
      });
    },
  };
}

module.exports = FindTaskByIdService;
