var Sequelize = require("sequelize");
var smartRequire = require("smart-require");
var extraLayer = smartRequire("config/dao");
var Hospital = require("./Hospital");

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

model.belongsToMany(Hospital, {through: 'Hospital_Service'});

module.exports = model;