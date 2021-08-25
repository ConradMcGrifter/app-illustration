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
const PHONE = document.querySelector(".phone");

const displayMessage = (element, className) => {
    element.classList.toggle(className);
};

const phoneSize = (className) => {
    PHONE.classList.toggle(className);
};

const tintControl = (className) => {
    document.querySelector(".darken").classList.toggle(className);
};

setTimeout(tintControl, 1000, "fadeIn");
setTimeout(phoneSize, 1000, "scaleUp");
setTimeout(displayMessage, 2500, BUBBLE1, "hide");
setTimeout(displayMessage, 2500, LEFT1, "display");
setTimeout(displayMessage, 3500, BUBBLE2, "hide");
setTimeout(displayMessage, 5500, BUBBLE2, "hide");
setTimeout(displayMessage, 5500, LEFT2, "display");
setTimeout(displayMessage, 7500, DOG_PICS, "display");
setTimeout(displayMessage, 7500, RIGHT1, "display");
setTimeout(displayMessage, 10000, RIGHT2, "display");
setTimeout(displayMessage, 11500, BUBBLE3, "hide");
setTimeout(displayMessage, 14000, BUBBLE3, "hide");
setTimeout(displayMessage, 14000, LEFT3, "display");
setTimeout(displayMessage, 15000, PRICING1, "display");
setTimeout(displayMessage, 15000, PRICING2, "display");
setTimeout(phoneSize, 16000, "scaleUp");
setTimeout(phoneSize, 16000, "scaleDown");
setTimeout(tintControl, 16500, "fadeIn");
setTimeout(tintControl, 16500, "fadeOut");
