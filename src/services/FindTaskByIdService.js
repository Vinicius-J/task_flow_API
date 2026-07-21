import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";

export class FindTaskByIdService {
  constructor() {
    this.repository = InMemoryTaskRepository;
  }

  execute(id) {
    const task = this.repository.findById(id);

    if (!task) throw new Error("Task not found");

    return task;
  }
}
