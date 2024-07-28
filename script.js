gsap.from(".box", { duration: 2, y: -600, ease: "elastic", stagger: 0.4 });
gsap.from(".heading", { duration: 2, y: -600, ease: "elastic" });
gsap.from(".heading", { duration: 2, opacity: 0 });

console.log("game started");

let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".heading");

let player = true; // for player 1 and 2 turns

const enabled = function () {
  boxes.forEach(function (box) {
    box.innerHTML = "";
    box.disabled = false;
  });
};
const disabled = function () {
  boxes.forEach(function (box) {
    box.disabled = true;
  });
};

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (player) {
      box.innerHTML = "X";
      player = false;
    } else {
      box.innerHTML = "O";
      player = true;
    }
    box.disabled = true;

    checkwin();
  });
});
const checkwin = function () {
  win.forEach(function (condition) {
    let [a, b, c] = condition;
    if (
      boxes[a].innerHTML == boxes[b].innerHTML &&
      boxes[a].innerHTML == boxes[c].innerHTML &&
      boxes[a].innerHTML != ""
    ) {
      document.querySelector(".heading").innerHTML =
        boxes[a].innerHTML + " Won";
      disabled();
      gsap.to(".box", { duration: 0.3, opacity: 0, stagger: 0.1 });
    }
  });
};

reset.forEach(function (ticker) {
  ticker.addEventListener("click", function () {
    enabled();
    document.querySelector(".heading").innerHTML = "Ticker";
    gsap.to(".box", { duration: 0.3, opacity: 1, stagger: 0.1 });
  });
});
