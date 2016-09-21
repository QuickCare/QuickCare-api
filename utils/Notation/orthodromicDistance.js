var getOrthodromicDistance = function(coord1, coord2) {
    var earthRadius = 6371.008;
    var kmPerDegrees = 2 * Math.PI * earthRadius;
    var long1 = toRad(coord1.long);
    var lat1 = toRad(coord1.lat);
    var long2 = toRad(coord2.long);
    var lat2 = toRad(coord2.lat);
    var distance = kmPerDegrees * toDeg(Math.acos(Math.sin(lat1) * Math.sin(lat2) 
                    + Math.cos(lat1) * Math.cos(lat2) + Math.cos(long2 - long1)));
            
    return distance;
}

function toRad(deg) 
{
    return deg * Math.PI / 180;
}

function toDeg(rad)
{
    return rad * 180 / Math.PI;
}

module.exports = getOrthodromicDistance;