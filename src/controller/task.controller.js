import { CreateTaskService } from "../services/CreateTaskService.js";
import { FindAllTasksService } from "../services/FindAllTasksService.js";
import { FindTaskByIdService } from "../services/FindTaskByIdService.js";
import { UpdateTaskService } from "../services/UpdateTaskService.js";
import { DeleteTaskService } from "../services/DeleteTaskService.js";

export class TaskController {
  constructor() {
    this.createTask = new CreateTaskService();
    this.findAllTasksService = new FindAllTasksService();
    this.findTaskByIdService = new FindTaskByIdService();
    this.updateTaskService = new UpdateTaskService();
    this.deleteTaskService = new DeleteTaskService();
  }

  index = async (req, res) => {
    try {
      const tasks = this.findAllTasksService.execute();
      return res.status(200).json(tasks);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  };

  store = async (req, res) => {
    try {
      const { task } = req.body;
      const newTask = this.createTask.execute(task);
      return res.status(201).json(newTask);
    } catch (err) {
      return res.status(400).json({ errorMessage: err.message });
    }
  };

  show = async (req, res) => {
    try {
      const { id } = req.params;
      const task = this.findTaskByIdService.execute(id);
      return res.status(200).json(task);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const { updatedTask } = req.body;

      const task = this.updateTaskService.execute(id, updatedTask);
      return res.status(200).json(task);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      this.deleteTaskService.execute(id);
      return res.sendStatus(204);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  };
}
