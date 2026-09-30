const InMemoryTaskRepository = require("../data/InMemoryTaskRepository.js");
const FindTaskByIdService = require("../services/FindTaskByIdService.js");

function makeFindTaskByIdService() {
  const repository = InMemoryTaskRepository;
  return FindTaskByIdService(repository);
}

module.exports = makeFindTaskByIdService;
