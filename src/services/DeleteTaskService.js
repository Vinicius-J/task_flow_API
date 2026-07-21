import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";

export class DeleteTaskService {
  constructor() {
    this.repository = InMemoryTaskRepository;
  }

  execute(id) {
    const task = this.repository.findById(id);
    if (!task) throw new Error("Task not found");
    this.repository.delete(id);
    return task;
  }
}
