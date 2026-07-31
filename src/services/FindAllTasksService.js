export class FindAllTasksService {
  constructor(repository) {
    this.repository = repository;
  }

  execute() {
    const tasks = this.repository.findAll();
    return tasks;
  }
}
