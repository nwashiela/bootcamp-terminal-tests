module.exports = function findItemsOver20(list) {
  console.log(list)
  var itemOver = [];
  // console.log(itemOver)
  for (var i = 0; i < list.length; i++) {
    var objects = list[i].qty;
    if (objects > 20) {
      itemOver.push(list[i])
      // console.log(itemOver)
    }
  }
  //console.log(itemOver)
  return itemOver;
}

