module.exports = function countAllPaarl(regN){
    var registration = [];
    var AllPaarl = regN.split(", ");
    
    for (var i=0;i<AllPaarl.length;i++){
       if (AllPaarl[i].startsWith("CJ")){
         registration.push(regN[i]);
       
       }
    }
    return registration.length;
  };