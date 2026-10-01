const taskRoutes = require("./task.routes");

function routes(req, res) {
  const taskRouteHandle = taskRoutes(req, res);

  if (taskRouteHandle) return;

  res.writeHead(404, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify({ message: "Route not found" }));
}

module.exports = routes;
