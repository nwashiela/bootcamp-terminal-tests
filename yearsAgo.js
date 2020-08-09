module.exports = function yearsAgo(year){
    const date = new Date();
    var years = date.getFullYear();
    var result = years -year;
    return result
  }
  