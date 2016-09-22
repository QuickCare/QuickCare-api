var smartRequire = require("smart-Require");
var getOrthodromicDistance = require("./orthodromicDistance").getOrthodromicDistance;
var Hospital = smartRequire("entities/Hospital");
var sequelize = smartRequire("config/sequelize");
var log = smartRequire("utils/logger")("Hospital");

function getBestHospitals(levelId, coord, serviceId, callback)
{
    Hospital.findAll().then(function(results){
        var sortedResults = results.sort((a, b) => getOrthodromicDistance(coord, {long:a.longitude,lat:a.latitude})
                                - getOrthodromicDistance(coord, {long:b.longitude,lat:b.latitude}));
        if(typeof(callback) === "function")
        {
            callback(sortedResults);
        }
    });
}

module.exports = getBestHospitals;