const InMemoryTaskRepository = require("../data/InMemoryTaskRepository.js");
const CreateTaskService = require("../services/CreateTaskService.js");

function makeCreateTaskService() {
  const repository = InMemoryTaskRepository;
  return CreateTaskService(repository);
}

module.exports = makeCreateTaskService;
