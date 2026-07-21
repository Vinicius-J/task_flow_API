import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";
import { TaskStatus } from "../utils/TaskStatus.js";

export class CreateTaskService {
  constructor() {
    this.repository = InMemoryTaskRepository;
  }

  execute(task) {
    if (!task || typeof task !== "string") throw new Error("Task is required");

    const lastTask = this.repository.findAll().at(-1);
    const id = lastTask ? lastTask.id + 1 : 1;

    const newTask = { id, status: TaskStatus.IN_PROGRESS, task };
    this.repository.create(newTask);

    return newTask;
  }
}
