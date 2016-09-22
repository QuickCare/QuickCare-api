var routes = [];

routes = routes.concat(require("./User"));
routes = routes.concat(require("./Hospital"));
routes = routes.concat(require("./Level"));
routes = routes.concat(require("./Service"));

routes = routes.concat(require("./error"));

module.exports = routes;