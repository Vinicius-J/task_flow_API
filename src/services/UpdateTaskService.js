import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";

export class UpdateTaskService {
  constructor() {
    this.repository = InMemoryTaskRepository;
  }

  execute(id, updatedTask) {
    if (!updatedTask || typeof updatedTask !== "string") {
      throw new Error("Task is required");
    }

    const task = this.repository.findById(id);
    if (!task) throw new Error("Task not found");

    this.repository.update(id, updatedTask);

    return task;
  }
}
