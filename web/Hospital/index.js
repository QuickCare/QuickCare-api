var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var User = smartRequire("entities/User");
var Session = smartRequire("entities/Session");
var sha256 = require("sha256");
var log = smartRequire("utils/logger")("Hospital");

var getBestHospital = new Route("/hospital", "get", function(request, response){
    if(Number.isInteger(request.body.level) && request.body.coord !== undefined && 
            Number.isFinite(request.body.coord.long) && Number.isFinite(request.body.coord.lat))
    {
        Hospital.findAll().then(function(result) {
            response.json(result);
        });
    }
    reponse.json({
        error: "Wrong arguments were given" 
    });
});

module.exports = getBestHospital;