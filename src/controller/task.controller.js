import { CreateTaskService } from "../services/CreateTaskService.js";
import { FindAllTasksService } from "../services/FindAllTasksService.js";

export class TaskController {
  constructor() {
    this.createTask = new CreateTaskService();
    this.store = this.store.bind(this);
    this.findAllTasksService = new FindAllTasksService();
    this.index = this.index.bind(this);
  }

  async index(req, res) {
    try {
      const tasks = this.findAllTasksService.execute();
      return res.status(200).json(tasks);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async store(req, res) {
    try {
      const { task } = req.body;
      const newTask = this.createTask.execute(task);
      return res.status(201).json(newTask);
    } catch (err) {
      return res.status(400).json({ errorMessage: err.message });
    }
  }
}
