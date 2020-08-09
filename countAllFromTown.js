module.exports = function countAllFromTown(regN,location){
    //console.log(location);
      var allnumber = [];
      var CATown = regN.split(",");
    //console.log(CATown)
      for(i=0; i<CATown.length; i++){
      var station = CATown[i].trim();
        if(station.startsWith(location)){
        allnumber.push(station);
         // console.log(allnumber)
        }
      }
    return allnumber.length
    }