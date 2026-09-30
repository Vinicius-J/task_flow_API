const makeCreateTaskService = require("../factories/makeCreateTaskService.js");
const makeFindAllTasksService = require("../factories/makeFindAllTasksService.js");
const makeFindTaskByIdService = require("../factories/makeFindTaskByIdService.js");
const makeUpdateTaskService = require("../factories/makeUpdateTaskService.js");
const makeDeleteTaskService = require("../factories/makeDeleteTaskService.js");

function TaskController() {
  return {
    index(req, res) {
      const useCase = makeFindAllTasksService();

      useCase
        .execute()
        .then(function (tasks) {
          return res.status(200).json(tasks);
        })
        .catch(function (err) {
          return res.status(400).json({ message: err.message });
        });
    },
    store(req, res) {
      const { task } = req.body;
      const useCase = makeCreateTaskService();

      useCase
        .execute(task)
        .then(function (newTask) {
          return res.status(201).json(newTask);
        })
        .catch(function (err) {
          return res.status(400).json({ message: err.message });
        });
    },
    show(req, res) {
      const { id } = req.params;
      const useCase = makeFindTaskByIdService();

      useCase
        .execute(id)
        .then(function (task) {
          return res.status(200).json(task);
        })
        .catch(function (err) {
          return res.status(404).json({ message: err.message });
        });
    },
    update(req, res) {
      const { id } = req.params;
      const { updatedTask } = req.body;
      const useCase = makeUpdateTaskService();

      useCase
        .execute(id, updatedTask)
        .then(function (task) {
          return res.status(200).json(task);
        })
        .catch(function (err) {
          return res.status(404).json({ message: err.message });
        });
    },
    deleteTask(req, res) {
      const { id } = req.params;
      const useCase = makeDeleteTaskService();
      useCase
        .execute(id)
        .then(function () {
          return res.sendStatus(204);
        })
        .catch(function (err) {
          return res.status(404).json({ message: err.message });
        });
    },
  };
}

module.exports = TaskController;
