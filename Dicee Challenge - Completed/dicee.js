//Player 1 image randomisation//

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

//Player 2 image randomisation//

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//If Player 1 Wins

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " ð Player 1 Wins! ";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " ð Player 2 Wins! ";
} else {
  document.querySelector("h1").innerHTML = "ðĪŠ Draw";
}
