const TaskStatus = require("../utils/TaskStatus.js");

let tasks = [
  { id: 1, status: TaskStatus.IN_PROGRESS, task: "Tarefa 1" },
  { id: 2, status: TaskStatus.COMPLETED, task: "Tarefa 2" },
  { id: 3, status: TaskStatus.IN_PROGRESS, task: "Tarefa 3" },
  { id: 4, status: TaskStatus.COMPLETED, task: "Tarefa 4" },
  { id: 5, status: TaskStatus.COMPLETED, task: "Tarefa 5" },
];

const InMemoryTaskRepository = {
  create(task) {
    return Promise.resolve(tasks.push(task));
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
