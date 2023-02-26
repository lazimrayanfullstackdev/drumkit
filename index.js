var numberofdrumbutton = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofdrumbutton;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}
function handleclick(){
    var buttonhtml = this.innerHTML;
    makesound(buttonhtml);
}

document.addEventListener("keydown", handlekeyboard);

function handlekeyboard(){
    makesound(event.key);
}

function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        default:
            console.log(key);
    }
}