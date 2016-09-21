var Sequelize = require("sequelize");
var smartRequire = require("smart-require");
var extraLayer = smartRequire("config/dao");

var Level = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    value: {
        type: Sequelize.INTEGER
    }
};

var model = extraLayer.register("Level", "level", Level);

module.exports = model;