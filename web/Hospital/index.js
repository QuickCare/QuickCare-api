var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var Hospital = smartRequire("entities/Hospital");
var getBestHospitals = smartRequire("utils/Notation/getBestHospitals");

var getHospital = new Route("/hospital", "get", function(request, response){
    
    var json = JSON.parse(request.query.json);
    if(Number.isInteger(json.level) && json.coord !== undefined && 
            Number.isFinite(json.coord.long) && Number.isFinite(json.coord.lat) &&
            Number.isInteger(json.service))
    {
        getBestHospitals(json.level, json.coord, json.service, function(results) {
            response.json(results);
        });
    }
    else
    {
        response.json({
            error: "Wrong arguments were given"
        });
    }
});

module.exports = [getHospital];