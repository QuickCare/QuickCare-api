var smartRequire = require("smart-require");
var sequelize = smartRequire("config/sequelize");
var User = require("./User");
var Session = require("./Session");
var Hospital = require("./Hospital");
var Level = require("./Level");
var Specialty = require("./Specialty");
var Service = require("./Service");

sequelize.sync();