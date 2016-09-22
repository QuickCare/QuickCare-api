var smartRequire = require("smart-require");
var sequelize = smartRequire("config/sequelize");
var User = require("./User");
var Session = require("./Session");
var Hospital = require("./Hospital");
var Level = require("./Level");
var Service = require("./Service");

sequelize.sync();