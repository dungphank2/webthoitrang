const customerRouter = require("./customer");

function setRoute(server) {
  server.use("/api/customer", customerRouter);
}

module.exports = setRoute;