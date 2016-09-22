var smartRequire = require("smart-Require");
var getOrthodromicDistance = require("./orthodromicDistance").getOrthodromicDistance;
var Hospital = smartRequire("entities/Hospital");
var sequelize = smartRequire("config/sequelize");
var log = smartRequire("utils/logger")("Hospital");

function getBestHospitals(level, coord, serviceId, callback)
{
    Hospital.findAll().then(function(results){
        var sortedResults = results.sort((a, b) => getOrthodromicDistance(coord, {long:a.longitude,lat:a.latitude})
                                - getOrthodromicDistance(coord, {long:b.longitude,lat:b.latitude})).slice(0, 10);
        var outputArray = [];
        var counter = sortedResults.length;
        for (var i = 0 ; i < sortedResults.length ; i++)
        {
            outputArray[i] = {
                score: (sortedResults.length - i) * 1000 * (level / 100),
                longitude: sortedResults[i].longitude,
                latitude: sortedResults[i].latitude,
                name: sortedResults[i].name,
                address: sortedResults[i].address,
                hasService: false
            }
            
            checkServiceExistence(outputArray, sortedResults[i], outputArray[i], level, serviceId, counter, callback);
        }
    });
}

function checkServiceExistence(outputArray, result, output, level, serviceId, counter, callback)
{
    log.warn(JSON.stringify(result))
    result.getServices().then(function(services) {
        for (var j = 0 ; j < services.length && !output.hasService ; j++)
        {
            if(services[j].id === serviceId)
            {
                output.hasService = true;
                output.score += 1000 * ((100 - level) / 100);
            }
        }

        counter--;

        if(counter < 1 && typeof(callback) === "function")
        {
            var out = outputArray.sort((a, b) => a.score - b.score);
            callback(out);
        }
    });
}

module.exports = getBestHospitals;