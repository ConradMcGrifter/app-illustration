const LEFT1 = document.getElementById("left-1");
const BUBBLE1 = document.querySelector(".bubble-1");
const LEFT2 = document.getElementById("left-2");
const BUBBLE2 = document.querySelector(".bubble-2");
const LEFT3 = document.getElementById("left-3");
const BUBBLE3 = document.querySelector(".bubble-3");
const DOG_PICS = document.getElementById("dog-pics");
const RIGHT1 = document.getElementById("right-1");
const RIGHT2 = document.getElementById("right-2");
const PRICING1 = document.getElementById("pricing-1");
const PRICING2 = document.getElementById("pricing-2");

const displayMessage = (element, className) => {
    element.classList.toggle(className);
};

// const hideMessage = (element) => {
//     element.classList.toggle("hide");
// };

setTimeout(displayMessage, 2000, BUBBLE1, "hide");
setTimeout(displayMessage, 2000, LEFT1, "fadeIn");
setTimeout(displayMessage, 3000, BUBBLE2, "hide");
setTimeout(displayMessage, 5000, BUBBLE2, "hide");
setTimeout(displayMessage, 5000, LEFT2, "fadeIn");
setTimeout(displayMessage, 6500, DOG_PICS, "fadeIn");
setTimeout(displayMessage, 6500, RIGHT1, "fadeIn");
setTimeout(displayMessage, 8000, RIGHT2, "fadeIn");
setTimeout(displayMessage, 9000, BUBBLE3, "hide");
setTimeout(displayMessage, 11000, BUBBLE3, "hide");
setTimeout(displayMessage, 11000, LEFT3, "fadeIn");
setTimeout(displayMessage, 12500, PRICING1, "fadeIn");
setTimeout(displayMessage, 12500, PRICING2, "fadeIn");
