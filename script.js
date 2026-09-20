const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");


// Open the letter
openButton.addEventListener("click", function () {

    document.body.classList.add("open");

    createHearts();

});


// Close the letter
closeButton.addEventListener("click", function () {

    document.body.classList.remove("open");

});


// Create floating hearts
function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        document.body.appendChild(heart);


        // Remove heart after animation
        setTimeout(function () {

            heart.remove();

        }, 7000);

    }

}