var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");

var allErr = new Route("*", "all", function(request, response){
    response.json({
        error: "Given route is not available"
    });
});

module.exports = allErr;