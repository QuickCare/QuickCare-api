var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var Level = smartRequire("entities/Level");

var getLevel = new Route("/level", "get", function(request, response){
    Level.findAll({
        order: "value DESC"
    }).then(function(result) {
        response.json(result);
    });
});

module.exports = getLevel;