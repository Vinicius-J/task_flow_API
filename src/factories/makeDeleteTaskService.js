const InMemoryTaskRepository = require("../data/InMemoryTaskRepository.js");
const DeleteTaskService = require("../services/DeleteTaskService.js");

function makeDeleteTaskService() {
  const repository = InMemoryTaskRepository;
  return new DeleteTaskService(repository);
}

module.exports = makeDeleteTaskService;
