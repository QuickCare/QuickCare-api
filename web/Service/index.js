var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var Specialty = smartRequire("entities/Service");

var getSpecialty = new Route("/service", "get", function(request, response){
    Service.findAll({
        order: "name ASC"
    }).then(function(result) {
        response.json(result);
    });
});

module.exports = getSpecialty;