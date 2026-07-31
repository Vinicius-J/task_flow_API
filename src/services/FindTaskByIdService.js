import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";

export class FindTaskByIdService {
  constructor(repository) {
    this.repository = repository;
  }

  execute(id) {
    const task = this.repository.findById(id);

    if (!task) throw new Error("Task not found");

    return task;
  }
}
