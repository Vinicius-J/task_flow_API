import { TaskStatus } from "../utils/TaskStatus.js";
let tasks = [
  { id: 1, status: TaskStatus.IN_PROGRESS, task: "Tarefa 1" },
  { id: 2, status: TaskStatus.COMPLETED, task: "Tarefa 2" },
  { id: 3, status: TaskStatus.IN_PROGRESS, task: "Tarefa 3" },
  { id: 4, status: TaskStatus.COMPLETED, task: "Tarefa 4" },
  { id: 5, status: TaskStatus.COMPLETED, task: "Tarefa 5" },
];

const InMemoryTaskRepository = {
  create(task) {
    tasks.push(task);
  },
  findAll() {
    return tasks;
  },
  findById(id) {
    return tasks.find((task) => task.id === Number(id));
  },
  update(id, updatedTask) {
    tasks.forEach((task) => {
      if (task.id === Number(id)) task.task = updatedTask;
    });
  },
  delete(id) {
    const newTasks = tasks.filter((task) => task.id !== Number(id));
    tasks = newTasks;
    return tasks;
  },
};

export default InMemoryTaskRepository;
