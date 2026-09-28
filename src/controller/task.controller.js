const makeCreateTaskService = require("../factories/makeCreateTaskService.js");
const makeFindAllTasksService = require("../factories/makeFindAllTasksService.js");
const makeFindTaskByIdService = require("../factories/makeFindTaskByIdService.js");
const makeUpdateTaskService = require("../factories/makeUpdateTaskService.js");
const makeDeleteTaskService = require("../factories/makeDeleteTaskService.js");

class TaskController {
  index(req, res) {
    try {
      const useCase = makeFindAllTasksService();
      const tasks = useCase.execute();
      return res.status(200).json(tasks);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  store(req, res) {
    try {
      const { task } = req.body;
      const useCase = makeCreateTaskService();
      const newTask = useCase.execute(task);
      return res.status(201).json(newTask);
    } catch (err) {
      return res.status(400).json({ errorMessage: err.message });
    }
  }

  show(req, res) {
    try {
      const { id } = req.params;
      const useCase = makeFindTaskByIdService();
      const task = useCase.execute(id);
      return res.status(200).json(task);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  update(req, res) {
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

  delete(req, res) {
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

module.exports = TaskController;
