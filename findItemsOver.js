module.exports = function findItemsOver(list,threshold){
   var item = [];
     for (var i=0; i<list.length; i++){
     var find = list[i].qty;
       if (find>threshold){
       item.push(list[i])
        
       }
     }
     return item
   }