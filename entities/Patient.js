var Sequelize = require("sequelize");
var smartRequire = require("smart-require");
var extraLayer = smartRequire("config/dao");
var Service = require("./Service");
var Level = require("./Level");

var Patient = {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    }
};

var model = extraLayer.register("Patient", "patient", Patient);

model.belongsTo(Service);
model.belongsTo(Level);

module.exports = model;