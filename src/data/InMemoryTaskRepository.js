const crypto = require("node:crypto");

let tasks = [
  { id: crypto.randomUUID(), completed: false, task: "Tarefa 1" },
  { id: crypto.randomUUID(), completed: true, task: "Tarefa 2" },
  { id: crypto.randomUUID(), completed: false, task: "Tarefa 3" },
  { id: crypto.randomUUID(), completed: true, task: "Tarefa 4" },
  { id: crypto.randomUUID(), completed: true, task: "Tarefa 5" },
];

const InMemoryTaskRepository = {
  create({ completed, task }) {
    const taskPersisten = { id: crypto.randomUUID(), completed, task };
    return Promise.resolve(tasks.push(taskPersisten)).then(function () {
      return taskPersisten;
    });
  },
  findAll() {
    return Promise.resolve(tasks);
  },
  findById(id) {
    return Promise.resolve(tasks.find((task) => task.id === Number(id)));
  },
  update(id, updatedTask) {
    return Promise.resolve(tasks.find((task) => task.id === Number(id))).then(
      function (task) {
        task.task = updatedTask;
        return task;
      },
    );
  },
  deleteTask(id) {
    return Promise.resolve(tasks.filter((task) => task.id !== Number(id))).then(
      function (newTasks) {
        tasks = newTasks;
      },
    );
  },
};

module.exports = InMemoryTaskRepository;
