var getOrthodromicDistance = function(coord1, coord2) {
    var earthRadius = 6371.008;
    var kmPerDegrees = (2 * Math.PI * earthRadius) / 360;
    var long1 = toRad(coord1.long);
    var lat1 = toRad(coord1.lat);
    var long2 = toRad(coord2.long);
    var lat2 = toRad(coord2.lat);
    var distance = kmPerDegrees * toDeg(Math.acos(Math.sin(lat1) * Math.sin(lat2) 
                    + Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1)));

    return distance;
}

var getSQLOrthodromicDistance = function(long1, lat1, long2, lat2) {
    var earthRadius = 6371.008;
    var kmPerDegrees = 2 * Math.PI * earthRadius;
    var toRadRatio = Math.PI / 180;
    var distanceReq = kmPerDegrees + " * ACOS(SIN(" + lat1 + " * " + toRadRatio + ") * SIN(" + lat2 + " * "
                        + toRadRatio + ") + COS(" + lat1 + " * " + toRadRatio + ") *"
                        + " COS(" + lat2 + " * " + toRadRatio + ") * COS((" + long2 + " - " 
                        + long1 + ") * " + toRadRatio + ")) * " + (180 / Math.PI);
            
    return distanceReq;
}

function toRad(deg) 
{
    return parseFloat(deg) * Math.PI / 180;
}

function toDeg(rad)
{
    return parseFloat(rad) * 180 / Math.PI;
}

module.exports = {
    getOrthodromicDistance : getOrthodromicDistance,
    getSQLOrthodromicDistance : getSQLOrthodromicDistance
}