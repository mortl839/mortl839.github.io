var color;
var number;
var colorGenerator = ['blue', 'red', 'green'];

var randomNumber = function() {
  number = Math.floor(Math.random()*20);
  return number;
};

var randomColor = function() {
  color = colorGenerator[Math.floor(Math.random()*3)];
  return color;
};

$('.box').mousemove(function () {
    var randomColor = '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
    $(this).css("background-color", randomColor);
});