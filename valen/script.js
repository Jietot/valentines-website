
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let clicks = 0;

noBtn.addEventListener("click", function() {

    clicks++;

    let newSize = 16 + (clicks * 15);
    let newPadding = 13 + (clicks * 12);

    yesBtn.style.fontSize = newSize + "px";
    yesBtn.style.padding =
        newPadding + "px " + (newPadding * 2) + "px";

    message.innerText = "Are you sure? 🥺💗";

    if (clicks >= 4) {
        yesBtn.classList.add("fullscreen");
    }
});

yesBtn.addEventListener("click", function() {
    window.location.href = "happy.html";
});
