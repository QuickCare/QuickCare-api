var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var Service = smartRequire("entities/Service");

var getService = new Route("/service", "get", function(request, response){
    Service.findAll({
        order: "name ASC"
    }).then(function(result) {
        response.json(result);
    });
});

module.exports = getService;