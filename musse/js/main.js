$("button").html("hello world");
var cats =["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg", "img/cat4.jpg"];
Math.floor(Math.random()*4);
$("body").html("<img src='imgcat1.jpg'>");

var randomCat = cats [Math.floor(Math.random()*4)];
$("body").append("<img src='img/" + randomCat + "'>");