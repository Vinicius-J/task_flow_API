function UpdateTaskService(repository) {
  const _repository = repository;
  return {
    execute(id, updatedTask) {
      if (!updatedTask || typeof updatedTask !== "string") {
        throw new Error("Task is required");
      }
      return _repository.findById(id).then(function (task) {
        if (!task) throw new Error("Task not found");

        return _repository.update(id, updatedTask).then(function () {
          return _repository.findById(id);
        });
      });
    },
  };
}

module.exports = UpdateTaskService;
