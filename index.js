console.log("Connected");

var numOFDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < numOFDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        animation(btnInnerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    animation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "f":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
        case "s":
            var kickbass = new Audio("sounds/kick-bass.mp3")
            kickbass.play();
        case "d":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();

    }

}

function animation(animate) {
    var activeButton = document.querySelector("." + animate)
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 50);
}