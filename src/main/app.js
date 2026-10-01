const http = require("http");

const routes = require("../routes/ index.routes");

const server = http.createServer(function (req, res) {
  routes(req, res);
});

module.exports = server;
