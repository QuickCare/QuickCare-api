var Sequelize = require("sequelize");
var smartRequire = require("smart-require");
var extraLayer = smartRequire("config/dao");
var Hospital = require("./Hospital");
var Specialty = require("./Specialty");

var Service = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    capacity : {
        type: Sequelize.INTEGER
    }
};

var model = extraLayer.register("Service", "service", Service);

model.belongsTo(Hospital);
model.belongsToMany(Specialty, {through: 'Service_Specialty'});

module.exports = model;