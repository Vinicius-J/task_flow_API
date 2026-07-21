import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";

export class UpdateTaskService {
  constructor() {
    this.repository = InMemoryTaskRepository;
  }

  execute(id, updtTask) {
    if (!updtTask || typeof updtTask !== "string") {
      throw new Error("Task is required");
    }

    const task = this.repository.findById(id);

    if (!task) throw new Error("Task not found");

    task.task = updtTask;

    return task;
  }
}
