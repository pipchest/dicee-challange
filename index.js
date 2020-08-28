var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number 1-6.

var randomImage1 = "dice" + randomNumber1 + ".png" // diceRandom.png

var randomImageSrc = "images/" +  randomImage1; // /image.diceRandom.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1 // random number 1-6;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSrc2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSrc2);
