var Sequelize = require("sequelize");
var smartRequire = require("smart-require");
var extraLayer = smartRequire("config/dao");

var Hospital = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type : Sequelize.STRING
    },
    address: {
        type : Sequelize.STRING
    },
    longitude: {
        type: Sequelize.DOUBLE
    },
    latitude: {
        type: Sequelize.DOUBLE
    },
    capacity : {
        type: Sequelize.INTEGER
    },
    patients : {
        type: Sequelize.INTEGER
    }
};

var model = extraLayer.register("Hospital", "hospital", Hospital);

module.exports = model;