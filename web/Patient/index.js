var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var Hospital = smartRequire("entities/Hospital");
var sequelize = smartRequire("config/sequelize");


var getPatient = new Route("/patient", "get", function(request, response){
    
    var json = JSON.parse(request.query.json);
    if(Number.isInteger(json.hospitalId))
    {
        Hospital.findById(json.hospitalId).then(function(result) {
            response.json(result.patients);
        });
        
        response.json({
            updated: "Incremented hospital " + json.hospitalId + " patient counter"
        });
    }
    else
    {
        response.json({
            error: "Wrong arguments were given"
        });
    }
});

var addPatient = new Route("/patient", "put", function(request, response){
    
    var json = request.body;
    if(Number.isInteger(json.hospitalId))
    {
        Hospital.update({
            patients: sequelize.literal('patients +1'),
        }, {
            where: {
                id: json.hospitalId 
            }
        });
        
        response.json({
            updated: "Incremented hospital " + json.hospitalId + " patient counter"
        });
    }
    else
    {
        response.json({
            error: "Wrong arguments were given"
        });
    }
});

var delPatient = new Route("/patient", "delete", function(request, response){
    
    var json = request.body;
    if(Number.isInteger(json.hospitalId))
    {
        Hospital.update({
            patients: sequelize.literal('patients -1'),
        }, {
            where: {
                id: json.hospitalId,
                patients: {
                    $gt: 0
                },
            }
        });
        
        response.json({
            updated: "Decremented hospital " + json.hospitalId + " patient counter"
        });
    }
    else
    {
        response.json({
            error: "Wrong arguments were given"
        });
    }
});

module.exports = [
                    getPatient,
                    addPatient,
                    delPatient
                ];