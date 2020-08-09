module.exports = function countRegNumber(registration){
    var result = registration.split(",");
    return result.length;
  }