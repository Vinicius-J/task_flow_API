const makeCreateTaskService = require("../factories/makeCreateTaskService.js");
const makeFindAllTasksService = require("../factories/makeFindAllTasksService.js");
const makeFindTaskByIdService = require("../factories/makeFindTaskByIdService.js");
const makeUpdateTaskService = require("../factories/makeUpdateTaskService.js");
const makeDeleteTaskService = require("../factories/makeDeleteTaskService.js");

const getRequestBody = require("../utils/getRequestBody.js");

function TaskController() {
  return {
    index(req, res) {
      const useCase = makeFindAllTasksService();

      useCase
        .execute()
        .then(function (tasks) {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });

          res.end(JSON.stringify(tasks));
        })
        .catch(function (err) {
          res.writeHead(400, {
            "Content-Type": "application/json",
          });

          res.end(JSON.stringify({ message: err.message }));
        });
    },
    store(req, res) {
      getRequestBody(req).then(function (body) {
        const { task } = body;

        useCase
          .execute(task)
          .then(function (newTask) {
            res.writeHead(201, {
              "Content-Type": "application/json",
            });

            res.end(JSON.stringify(newTask));
          })
          .catch(function (err) {
            res.writeHead(400, {
              "Content-Type": "application/json",
            });

            res.end(JSON.stringify({ message: err.message }));
          });
      });

      const useCase = makeCreateTaskService();
    },
    show(req, res, id) {
      const useCase = makeFindTaskByIdService();

      useCase
        .execute(id)
        .then(function (task) {
          res.writeHead(200, {
            "Content-Type": "application/json",
          });

          res.end(JSON.stringify(task));
        })
        .catch(function (err) {
          res.writeHead(404, {
            "Content-Type": "application/json",
          });

          res.end(JSON.stringify({ message: err.message }));
        });
    },
    update(req, res, id) {
      getRequestBody(req).then(function (body) {
        const { updatedTask } = body;

        const useCase = makeUpdateTaskService();

        useCase
          .execute(id, updatedTask)
          .then(function (task) {
            res.writeHead(200, {
              "Content-Type": "application/json",
            });

            res.end(JSON.stringify(task));
          })
          .catch(function (err) {
            res.writeHead(404, {
              "Content-Type": "application/json",
            });

            res.end(JSON.stringify({ message: err.message }));
          });
      });
    },
    deleteTask(req, res, id) {
      const useCase = makeDeleteTaskService();
      useCase
        .execute(id)
        .then(function () {
          res.writeHead(204, {
            "Content-Type": "application/json",
          });

          res.end();
        })
        .catch(function (err) {
          res.writeHead(404, {
            "Content-Type": "application/json",
          });

          res.end(JSON.stringify({ message: err.message }));
        });
    },
  };
}

module.exports = TaskController;
