import { makeCreateTaskService } from "../factories/makeCreateTaskService.js";
import { makeFindAllTasksService } from "../factories/makeFindAllTasksService.js";
import { makeFindTaskByIdService } from "../factories/makeFindTaskByIdService.js";
import { makeUpdateTaskService } from "../factories/makeUpdateTaskService.js";
import { makeDeleteTaskService } from "../factories/makeDeleteTaskService.js";

export class TaskController {
  async index(req, res) {
    try {
      const useCase = makeFindAllTasksService();
      const tasks = useCase.execute();
      return res.status(200).json(tasks);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async store(req, res) {
    try {
      const { task } = req.body;
      const useCase = makeCreateTaskService();
      const newTask = useCase.execute(task);
      return res.status(201).json(newTask);
    } catch (err) {
      return res.status(400).json({ errorMessage: err.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const useCase = makeFindTaskByIdService();
      const task = useCase.execute(id);
      return res.status(200).json(task);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { updatedTask } = req.body;
      const useCase = makeUpdateTaskService();

      const task = useCase.execute(id, updatedTask);
      return res.status(200).json(task);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const useCase = makeDeleteTaskService();
      useCase.execute(id);
      return res.sendStatus(204);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }
}
