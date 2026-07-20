import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";

export class CreateTask {
  repository;
  constructor() {
    this.repository = InMemoryTaskRepository;
  }

  execute(task) {
    const id = this.repository.at(-1).id + 1;
    const newTask = { id, status: "inProgress", task };
    this.repository.push(newTask);
  }
}
