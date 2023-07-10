var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6)) + 1;

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomScrImg = "images/" + randomDiceImg;

document.querySelectorAll("img")[0].setAttribute("src", randomScrImg);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6)) + 1;

var randomDiceImg = "dice" + randomNumber2 + ".png";

var randomScrImg = "images/" + randomDiceImg;

document.querySelectorAll("img")[1].setAttribute("src", randomScrImg);

if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}