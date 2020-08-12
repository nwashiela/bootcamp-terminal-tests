module.exports = function mostProfitableDepartment(data){
    var findMap = 0;
 var department ="";
   
   for (var i=0; i<data.length; i++){ 
   var find = data[i].department;
     var table = data[i].sales
     //console.log(table)   
     if(table>findMap){
     findMap = table;
      department = find;
       }
     }
  return department;
   }
 
 