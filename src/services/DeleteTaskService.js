function DeleteTaskService(repository) {
  const _repository = repository;
  return {
    execute(id) {
      return Promise.resolve(_repository.findById(id)).then(function (task) {
        if (!task) throw new Error("Task not found");
        return Promise.resolve(_repository.delete(id)).then(function () {
          return task;
        });
      });
    },
  };
}

module.exports = DeleteTaskService;
