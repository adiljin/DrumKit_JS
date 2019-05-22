var randomNumber1 = Math.round((Math.random() * 5) + 1);
var randomNumber2 = Math.round((Math.random() * 5) + 1);

if(randomNumber1>randomNumber2){
    document.querySelector(".winner").innerHTML="🚩Player 1 Wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector(".winner").innerHTML="Player 2 Wins 🚩";
}else{
    document.querySelector(".winner").innerHTML="🚩Draw 🚩";
}

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
