var Sequelize = require("sequelize"); 

module.exports = new Sequelize("quickcare", "quickcare", "quickcare", {
	pool: false,
	host: "localhost",
	port: 3306
});