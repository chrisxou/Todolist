//jshint esversion: 6

module.exports.getDate = function(){

  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

  return date;
}
