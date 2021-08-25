const LEFT1 = document.getElementById("left-1");
const BUBBLE1 = document.querySelector(".typing-bubble");
const LEFT2 = document.getElementById("left-2");
const LEFT3 = document.getElementById("left-3");
const DOG_PICS = document.getElementById("dog-pics");
const RIGHT1 = document.getElementById("right-1");
const RIGHT2 = document.getElementById("right-2");
const PRICING1 = document.getElementById("pricing-1");
const PRICING2 = document.getElementById("pricing-2");

const displayMessage = (element) => {
    element.classList.toggle("fadeIn");
};

const hideMessage = (element) => {
    element.classList.toggle("hide");
};

setTimeout(hideMessage, 2000, BUBBLE1);
setTimeout(displayMessage, 2000, LEFT1);
// setTimeout(displayMessage, 4000, LEFT2);
// setTimeout(displayMessage, 6000, DOG_PICS);
// setTimeout(displayMessage, 6000, RIGHT1);
// setTimeout(displayMessage, 8000, RIGHT2);
// setTimeout(displayMessage, 11000, LEFT3);
// setTimeout(displayMessage, 12000, PRICING1);
// setTimeout(displayMessage, 12000, PRICING2);
