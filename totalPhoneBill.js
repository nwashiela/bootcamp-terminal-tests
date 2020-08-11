module.exports = function totalPhoneBill(phone){
 
    var totalB = 0;
     //var costsms = [];
     var PhoneBill = phone.split(",");
   
     for (var i=0; i< PhoneBill.length; i++){
     var data = PhoneBill[i].trim();
       if (data.startsWith("c")){
         totalB += 2.75;
     }
       if(data.startsWith("s")){
     totalB += 0.65;
     }
   }
     return "R" + totalB.toFixed(2)
   }