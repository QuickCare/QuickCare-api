var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var Hospital = smartRequire("entities/Hospital");

var getBestHospitals = new Route("/hospital", "get", function(request, response){
    if(Number.isInteger(request.body.level) && request.body.coord !== undefined && 
            Number.isFinite(request.body.coord.long) && Number.isFinite(request.body.coord.lat))
    {
        Hospital.findAll().then(function(result) {
            response.json(result);
        });
    }
    response.json({
        error: "Wrong arguments were given" 
    });
});

module.exports = [getBestHospitals];