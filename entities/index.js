var smartRequire = require("smart-require");
var sequelize = smartRequire("config/sequelize");
var User = require("./User");
var Session = require("./Session");
var Level = require("./Level");
var Service = require("./Service");
var Hospital = require("./Hospital");

sequelize.sync();