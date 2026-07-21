import { CreateTaskService } from "../services/CreateTaskService.js";
import { FindAllTasksService } from "../services/FindAllTasksService.js";
import { FindTaskByIdService } from "../services/FindTaskByIdService.js";
import { UpdateTaskService } from "../services/UpdateTaskService.js";
import { DeleteTaskService } from "../services/DeleteTaskService.js";

export class TaskController {
  constructor() {
    this.createTask = new CreateTaskService();
    this.store = this.store.bind(this);
    this.findAllTasksService = new FindAllTasksService();
    this.index = this.index.bind(this);
    this.findTaskByIdService = new FindTaskByIdService();
    this.show = this.show.bind(this);
    this.updateTaskService = new UpdateTaskService();
    this.update = this.update.bind(this);
    this.deleteTaskService = new DeleteTaskService();
    this.delete = this.delete.bind(this);
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

  async show(req, res) {
    try {
      const { id } = req.params;
      const task = this.findTaskByIdService.execute(id);
      return res.status(200).json(task);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { updatedTask } = req.body;

      const task = this.updateTaskService.execute(id, updatedTask);
      return res.status(200).json(task);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const task = this.deleteTaskService.execute(id);
      return res.status(204).json({ message: "Task deleted" });
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }
}
