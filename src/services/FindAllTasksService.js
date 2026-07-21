import InMemoryTaskRepository from "../data/InMemoryTaskRepository.js";

export class FindAllTasksService {
  constructor() {
    this.repository = InMemoryTaskRepository;
  }

  execute() {
    const tasks = this.repository.findAll();

    return tasks;
  }
}
