var smartRequire = require("smart-require");
var Route = smartRequire("utils/web/Route");
var User = smartRequire("entities/User");
var Session = smartRequire("entities/Session");
var sha256 = require("sha256");
var log = smartRequire("utils/logger")("Hospital");

var getBestHospital= new Route("/hospital", "get", function(request, response){
    
}

module.exports = 