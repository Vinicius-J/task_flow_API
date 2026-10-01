const TaskController = require("../controller/task.controller.js");

const taskController = TaskController();

function taskRoutes(req, res) {
  const url = new URL(req.url, "http://" + req.headers.host);

  const pathname = url.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/tasks") {
    taskController.index(req, res);
    return true;
  }

  if (method === "POST" && pathname === "/tasks") {
    taskController.store(req, res);
    return true;
  }

  if (method === "GET" && pathname.startsWith("/tasks/")) {
    const id = pathname.split("/")[2];

    taskController.show(req, res, id);
    return true;
  }

  if (method === "PUT" && pathname.startsWith("/tasks/")) {
    const id = pathname.split("/")[2];

    taskController.update(req, res, id);
    return true;
  }

  if (method === "DELETE" && pathname.startsWith("/tasks/")) {
    const id = pathname.split("/")[2];

    taskController.deleteTask(req, res, id);
    return true;
  }
}

module.exports = taskRoutes;
