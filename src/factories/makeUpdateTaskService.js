const InMemoryTaskRepository = require("../data/InMemoryTaskRepository.js");
const UpdateTaskService = require("../services/UpdateTaskService.js");

function makeUpdateTaskService() {
  const repository = InMemoryTaskRepository;
  return UpdateTaskService(repository);
}

module.exports = makeUpdateTaskService;
