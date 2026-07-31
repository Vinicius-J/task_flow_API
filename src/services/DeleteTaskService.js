export class DeleteTaskService {
  constructor(repository) {
    this.repository = repository;
  }

  execute(id) {
    const task = this.repository.findById(id);
    if (!task) throw new Error("Task not found");
    this.repository.delete(id);
    return task;
  }
}
