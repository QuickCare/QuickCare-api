var sequelize = require("./sequelize");

var register = function(className, tableName, object) {
        return registerModel(className, object);
}

var registerModel = function(className, object) {
    
    return sequelize.define(className, object, {
        paranoid : true,
        freezeTableName : true,
        underscored : true
    });
}

module.exports = {
	"register": register,
        "registerModel" : registerModel
}