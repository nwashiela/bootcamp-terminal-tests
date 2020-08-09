module.exports = function countAllPaarl(regN){
    //console.log(regN);
    var registration = [];
    var AllPaarl = regN.split(", ");
    //console.log(regN)
    
    for (var i=0;i<AllPaarl.length;i++){
       if (AllPaarl[i].startsWith("CJ")){
         registration.push(regN[i]);
       
       }
    }
    return registration.length;
  };