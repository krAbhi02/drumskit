const drumKey = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        audioSwitches(buttonInnerHTML);
        buttonAnimations(buttonInnerHTML);
        
    })
}

document.addEventListener("keydown", function(event) {
    audioSwitches(event.key);
    buttonAnimations(event.key);
})


function audioSwitches(key) {
    switch(key) {
        case 'w' : var audioURL = "/sounds/tom-1.mp3";
                 break;
        case 'a' : var audioURL = "/sounds/tom-2.mp3";
                 break;
        case 's' : var audioURL = "/sounds/tom-3.mp3";
                 break;
        case 'd' : var audioURL = "/sounds/tom-4.mp3";
                 break;
        case 'j' : var audioURL = "/sounds/snare.mp3";
                 break;
        case 'k' : var audioURL = "/sounds/crash.mp3";
                 break;
        case 'l' : var audioURL = "/sounds/kick-bass.mp3";
                 break;
        default : console.log(this.innerHTML);
    }
    var audioPlay = new Audio(audioURL);
    audioPlay.play();
}


function buttonAnimations(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}