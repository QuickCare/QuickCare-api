var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var Specialty = smartRequire("entities/Specialty");

var getSpecialty = new Route("/specialty", "get", function(request, response){
    Specialty.findAll().then(function(result) {
        response.json(result);
    });
});

module.exports = getSpecialty;