var Sequelize = require("sequelize");
var smartRequire = require("smart-require");
var extraLayer = smartRequire("config/dao");

var Service = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
};

var model = extraLayer.register("Service", "service", Service);

module.exports = model;