function getRequestBody(req) {
  return new Promise(function (resolve, reject) {
    let body = "";

    req.on("data", function (chunk) {
      body += chunk;
    });

    req.on("end", function () {
      try {
        const parsedBody = JSON.parse(body);

        resolve(parsedBody);
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", function (error) {
      reject(error);
    });
  });
}

module.exports = getRequestBody;
