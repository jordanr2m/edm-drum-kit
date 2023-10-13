document.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.key}"]`); // Selects elements with class of key that also have a data-key attribute and value that matches the event's key value
    // console.log(key);
    if (!audio) return; // Stops function from running if there is no audio
    audio.currentTime = 0; // Rewinds to start of the sound over and over
    audio.play(); // plays media file (sound)
    key.classList.add("playing");
});

// Remove transition animation
function removeTransition(e) {
    if (e.propertyName !== "transform") return; // Skips this function if it is not a transform event taking place
    this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));