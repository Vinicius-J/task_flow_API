const TaskStatus = require("../utils/TaskStatus.js");

function CreateTaskService(repository) {
  const _repository = repository;
  return {
    execute(task) {
      if (!task || typeof task !== "string") {
        throw new Error("Task is required");
      }
      return Promise.resolve(_repository.findAll()).then(function (tasks) {
        const lastTask = tasks[tasks.length - 1];
        const id = lastTask ? lastTask.id + 1 : 1;

        const newTask = { id, status: TaskStatus.IN_PROGRESS, task };
        _repository.create(newTask);
        return newTask;
      });
    },
  };
}

module.exports = CreateTaskService;
