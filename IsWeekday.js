module.exports = function isWeekday(day){
    var result = !(day.startsWith("S"));
    return result
  }