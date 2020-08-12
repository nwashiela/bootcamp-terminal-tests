module.exports = function countAllFromTown(regN, location) {
  
  var allnumber = [];
  var CATown = regN.split(",");
  for (i = 0; i < CATown.length; i++) {
    var station = CATown[i].trim();
    if (station.startsWith(location)) {
      allnumber.push(station);

    }
  }
  return allnumber.length
}