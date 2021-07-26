const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");
const galactica = document.getElementById("Galactica");
const calculator = document.getElementById("Calculator");
const ticTac = document.getElementById("TicTac");
const Twitter = document.getElementById("Twitter");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

Twitter.addEventListener("click", () => {
  window.open("https://tweetme2-deploy.herokuapp.com/", "_blank");
});
galactica.addEventListener("click", () => {
  window.open(
    "https://sarthakbhandari.github.io/Shooting-Star-Galactica/",
    "_blank"
  );
});
calculator.addEventListener("click", () => {
  window.open(
    "https://sarthakbhandari.github.io/Scientific-Calculator-JS/",
    "_blank"
  );
});
ticTac.addEventListener("click", () => {
  window.open("https://sarthakbhandari.github.io/Tic-Tac-Toe-JS/", "_blank");
});
