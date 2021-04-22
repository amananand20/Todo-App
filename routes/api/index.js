const route = require("express").Router();

route.use("/tasks", require("./tasks.js").route);
route.use("/lists", require("./lists.js").route);

exports = module.exports = {
    route
};