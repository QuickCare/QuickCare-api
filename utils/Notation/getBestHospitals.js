var smartRequire = require("smart-Require");
var getOrthodromicDistance = require("./orthodromicDistance").getOrthodromicDistance;
var Hospital = smartRequire("entities/Hospital");
var log = smartRequire("utils/logger")("Hospital");
var counter;

function getBestHospitals(level, coord, serviceId, callback)
{
    Hospital.findAll().then(function(results){
        var sortedResults = results.sort((a, b) => getOrthodromicDistance(coord, {long:a.longitude,lat:a.latitude})
                                - getOrthodromicDistance(coord, {long:b.longitude,lat:b.latitude})).slice(0, results.length < 10 ? results.length : 10);
        var outputArray = [];
        counter = sortedResults.length;
        for (var i = 0 ; i < sortedResults.length ; i++)
        {
            var turnover = (sortedResults[i].capacity - sortedResults[i].patients) / sortedResults[i].capacity;
            outputArray[i] = {
                score: 1000 * (((sortedResults.length - i) / sortedResults.length) * (level / 100) + 
                        (turnover * ((100 - level) / 100))),
                longitude: sortedResults[i].longitude,
                latitude: sortedResults[i].latitude,
                name: sortedResults[i].name,
                address: sortedResults[i].address,
                hasService: false,
                nearest: i + 1,
                turnover: turnover * 100
            };
            
            checkServiceExistence(outputArray, sortedResults[i], outputArray[i], level, serviceId, callback);
        }
    });
}

function checkServiceExistence(outputArray, result, output, level, serviceId, callback)
{
    result.getServices().then(function(services) {
        for (var j = 0 ; j < services.length && !output.hasService ; j++)
        {
            if(services[j].id === serviceId)
            {
                output.hasService = true;
                output.score += 10000 * ((100 - level) / 100);
            }
        }

        counter--;

        if(counter < 1 && typeof(callback) === "function")
        {
            var out = outputArray.sort((a, b) => b.score - a.score);
            callback(out);
        }
    });
    
}

module.exports = getBestHospitals;