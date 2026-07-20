import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";

export class CreateTaskService {
  repository;
  constructor() {
    this.repository = InMemoryTaskRepository;
  }

  execute(task) {
    const lastTask = this.repository.at(-1);
    const id = lastTask ? lastTask.id + 1 : 1;
    const newTask = { id, status: "inProgress", task };
    this.repository.push(newTask);
    return newTask;
  }
}
