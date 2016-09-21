var getOrthodromicDistance = require("./orthdromicDistance");
var Hospital = smartRequire("entities/");

function getBestHospitals(level, coord)
{
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
}

module.exports = getBestHospital;