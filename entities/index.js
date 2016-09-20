var smartRequire = require("smart-require");
var sequelize = smartRequire("config/sequelize");
var User = require("./User");
var Session = require("./Session");

sequelize.sync();