const tasks = [
  { id: 1, status: "inProgress", task: "Tarefa 1" },
  { id: 2, status: "completed", task: "Tarefa 2" },
  { id: 3, status: "inProgress", task: "Tarefa 3" },
  { id: 4, status: "completed", task: "Tarefa 4" },
  { id: 5, status: "completed", task: "Tarefa 5" },
];

const TaskRepostitory = {
  create(task) {
    tasks.push(task);
  },
  findAll() {
    return tasks;
  },
  findById(id) {
    return tasks.find((task) => task.id === id);
  },
};

export default TaskRepository;
