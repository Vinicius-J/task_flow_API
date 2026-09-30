const TaskStatus = require("../utils/TaskStatus.js");

function CreateTaskService(repository) {
  const _repository = repository;
  return {
    execute(task) {
      return _repository.findAll().then(function (tasks) {
        if (!task || typeof task !== "string") {
          throw new Error("Task is required");
        }
        const lastTask = tasks[tasks.length - 1];
        const id = lastTask ? lastTask.id + 1 : 1;

        const newTask = { id, status: TaskStatus.IN_PROGRESS, task };
        return _repository.create(newTask).then(function () {
          return newTask;
        });
      });
    },
  };
}

module.exports = CreateTaskService;
