
var path='sounds/';
var path2='';

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    if(this.innerHTML==='w') {
      path2='tom-1.mp3';
    }else if(this.innerHTML==='a'){
      path2='tom-2.mp3';
    }else if(this.innerHTML==='s'){
      path2='tom-3.mp3';
    }else if(this.innerHTML==='d'){
      path2='tom-4.mp3';
    }else if(this.innerHTML==='j'){
      path2='snare.mp3';
    }else if(this.innerHTML==='k'){
      path2='crash.mp3';
    }else if(this.innerHTML==='l'){
      path2='kick-bass.mp3';
    }

    var audio = new Audio(path+path2);
    audio.play();


  });
}
