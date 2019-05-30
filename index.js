
var path='sounds/';
var path2='';

//detecting button press
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttons = this.innerHTML;
    makeSound(buttons);
    buttonAnimation(buttons);

  });
}

//detecting keyboard press
document.addEventListener("keypress", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});

//making sounds
function makeSound(key) {
  switch(key){
    case 'w':
    path2='tom-1.mp3';
    break;

    case 'a':
    path2='tom-2.mp3';
    break;

    case 's':
    path2='tom-3.mp3';
    break;

    case 'd':
    path2='tom-4.mp3';
    break;

    case 'j':
    path2='snare.mp3';
    break;

    case 'k':
    path2='crash.mp3';
    break;

    case 'l':
    path2='kick-bass.mp3';
    break;
  }

  var audio = new Audio(path+path2);
  audio.play();
  var path2='';
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
