require("dotenv/config");

const port = process.env.PORT || 3000;

const app = require("./app.js");

app.listen(port, function () {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
