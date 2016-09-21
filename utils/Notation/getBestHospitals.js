var smartRequire = require("smart-Require");
var getOrthodromicDistance = require("./orthodromicDistance").getOrthodromicDistance;
var Hospital = smartRequire("entities/Hospital");
var sequelize = smartRequire("config/sequelize");
var log = smartRequire("utils/logger")("Hospital");

function getBestHospitals(levelId, coord, serviceId)
{
    Hospital.findAll().then(function(results){
        var sortedResults = results.sort((a, b) => getOrthodromicDistance(coord, {long:a.longitude,lat:a.latitude})
                                - getOrthodromicDistance(coord, {long:b.longitude,lat:b.latitude}));
        for(var i = 0 ; i < results.length ; i++)
        {
            sortedResults[i].score = (results.length - i) * 1000
            sortedResults[i].getServices().then(function(services){
                if(Array.isArray(services) && services.length !== 1)
                {
                    sortedResults[i] += 10000;
                }
            });
        }
    });
}

module.exports = getBestHospitals;