const keyboardKeys = document.querySelectorAll(".key");
const callKey = document.querySelector(".call-button");
const backspaceKey = document.querySelector(".delete-button");
const audio = document.querySelector("audio");
const display = document.querySelector(".display");

console.log(display);

keyboardKeys.forEach(key => {
    key.addEventListener("click", event => {
        const digit = event.target.textContent.trim();
        if (display.value.length < 11) {
            display.value += digit;
        }
    });
});

backspaceKey.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

callKey.addEventListener("click", () => {
    audio.play()
});
